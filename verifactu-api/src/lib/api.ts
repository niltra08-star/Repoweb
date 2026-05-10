import prisma from './db';
import { generateApiKey } from './auth';
import { v4 as uuidv4 } from 'uuid';

export async function createUser(email: string, password: string, name?: string) {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error('User already exists');
  }
  
  return prisma.user.create({
    data: { email, password, name },
  });
}

export async function createApiKey(userId: string, name: string) {
  const key = generateApiKey();
  
  return prisma.apiKey.create({
    data: { key, name, userId },
  });
}

export async function getUserByApiKey(key: string) {
  const apiKey = await prisma.apiKey.findUnique({
    where: { key },
    include: { user: true },
  });
  
  if (!apiKey || apiKey.revoked) {
    return null;
  }
  
  await prisma.apiKey.update({
    where: { id: apiKey.id },
    data: { lastUsed: new Date() },
  });
  
  return apiKey.user;
}

export async function checkInvoiceLimit(userId: string): Promise<boolean> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return false;
  
  const limits: Record<string, { invoices: number; nifs: number }> = {
    hacker: { invoices: 100, nifs: 1 },
    indie: { invoices: 1500, nifs: 3 },
    studio: { invoices: 10000, nifs: 20 },
    scale: { invoices: 100000, nifs: 999999 },
  };
  
  const limit = limits[user.plan] || limits.hacker;
  return user.invoicesUsed < limit.invoices;
}

export interface CreateInvoiceData {
  emitter: { nif: string; name: string };
  receiver: { nif: string; name: string };
  lines: { description: string; amount: number; vat: number }[];
  series?: string;
  date?: string;
}

export async function createInvoice(userId: string, data: CreateInvoiceData) {
  const hasLimit = await checkInvoiceLimit(userId);
  if (!hasLimit) {
    throw new Error('Invoice limit exceeded for your plan');
  }
  
  const total = data.lines.reduce((sum, line) => sum + line.amount, 0);
  const vat = data.lines.reduce((sum, line) => sum + (line.amount * line.vat / 100), 0);
  
  const lastInvoice = await prisma.invoice.findFirst({
    where: { userId },
    orderBy: { number: 'desc' },
  });
  
  const series = data.series || 'F';
  const number = (lastInvoice?.number || 0) + 1;
  
  const invoice = await prisma.invoice.create({
    data: {
      userId,
      externalId: uuidv4(),
      emitterNif: data.emitter.nif,
      emitterName: data.emitter.name,
      receiverNif: data.receiver.nif,
      receiverName: data.receiver.name,
      series,
      number,
      date: data.date ? new Date(data.date) : new Date(),
      total,
      vat,
      status: 'created',
    },
  });
  
  await prisma.user.update({
    where: { id: userId },
    data: { invoicesUsed: { increment: 1 } },
  });
  
  return invoice;
}

export async function getInvoices(userId: string, limit = 50, offset = 0) {
  return prisma.invoice.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: limit,
    skip: offset,
  });
}

export async function getInvoice(invoiceId: string, userId: string) {
  return prisma.invoice.findFirst({
    where: { id: invoiceId, userId },
  });
}

export async function cancelInvoice(invoiceId: string, userId: string) {
  const invoice = await prisma.invoice.findFirst({
    where: { id: invoiceId, userId },
  });
  
  if (!invoice) {
    throw new Error('Invoice not found');
  }
  
  return prisma.invoice.update({
    where: { id: invoiceId },
    data: { status: 'cancelled' },
  });
}

export async function getUserStats(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { apiKeys: true, invoices: true },
  });
  
  if (!user) return null;
  
  const limits: Record<string, { invoices: number; nifs: number }> = {
    hacker: { invoices: 100, nifs: 1 },
    indie: { invoices: 1500, nifs: 3 },
    studio: { invoices: 10000, nifs: 20 },
    scale: { invoices: 100000, nifs: 999999 },
  };
  
  const limit = limits[user.plan] || limits.hacker;
  
  return {
    plan: user.plan,
    invoicesUsed: user.invoicesUsed,
    invoicesLimit: limit.invoices,
    nifsAllowed: user.nifsAllowed,
    nifsLimit: limit.nifs,
    apiKeysCount: user.apiKeys.length,
    totalInvoices: user.invoices.length,
  };
}
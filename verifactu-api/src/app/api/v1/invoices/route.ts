import { NextRequest, NextResponse } from 'next/server';
import { getUserByApiKey, createInvoice, getInvoices } from '@/lib/api';
import { verifyApiKey } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'API key required' },
        { status: 401 }
      );
    }
    
    const apiKey = authHeader.substring(7);
    if (!verifyApiKey(apiKey)) {
      return NextResponse.json(
        { error: 'Invalid API key format' },
        { status: 401 }
      );
    }
    
    const user = await getUserByApiKey(apiKey);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid or revoked API key' },
        { status: 401 }
      );
    }
    
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');
    
    const invoices = await getInvoices(user.id, limit, offset);
    
    return NextResponse.json({ invoices });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'API key required' },
        { status: 401 }
      );
    }
    
    const apiKey = authHeader.substring(7);
    if (!verifyApiKey(apiKey)) {
      return NextResponse.json(
        { error: 'Invalid API key format' },
        { status: 401 }
      );
    }
    
    const user = await getUserByApiKey(apiKey);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid or revoked API key' },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    const { emitter, receiver, lines, series, date } = body;
    
    if (!emitter?.nif || !emitter?.name || !receiver?.nif || !receiver?.name || !lines?.length) {
      return NextResponse.json(
        { error: 'Missing required fields: emitter, receiver, and lines are required' },
        { status: 400 }
      );
    }
    
    const invoice = await createInvoice(user.id, { emitter, receiver, lines, series, date });
    
    return NextResponse.json({
      id: invoice.id,
      externalId: invoice.externalId,
      series: invoice.series,
      number: invoice.number,
      date: invoice.date,
      total: invoice.total,
      vat: invoice.vat,
      status: invoice.status,
    }, { status: 201 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    if (errorMessage.includes('limit exceeded')) {
      return NextResponse.json(
        { error: 'Invoice limit exceeded for your plan' },
        { status: 403 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
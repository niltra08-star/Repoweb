import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { createApiKey } from '@/lib/api';
import { verifyToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Token required' }, { status: 401 });
    }
    
    const token = authHeader.substring(7);
    const payload = verifyToken(token);
    
    if (!payload) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
    
    const keys = await prisma.apiKey.findMany({
      where: { userId: payload.userId },
      select: { id: true, name: true, lastUsed: true, createdAt: true, revoked: true },
      orderBy: { createdAt: 'desc' },
    });
    
    return NextResponse.json({ keys });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Token required' }, { status: 401 });
    }
    
    const token = authHeader.substring(7);
    const payload = verifyToken(token);
    
    if (!payload) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
    
    const { name } = await request.json();
    if (!name) {
      return NextResponse.json({ error: 'Key name is required' }, { status: 400 });
    }
    
    const key = await createApiKey(payload.userId, name);
    
    return NextResponse.json({ key: key.key, name: key.name, id: key.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
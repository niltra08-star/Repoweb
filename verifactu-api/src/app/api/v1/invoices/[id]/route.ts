import { NextRequest, NextResponse } from 'next/server';
import { getUserByApiKey, getInvoice, cancelInvoice } from '@/lib/api';
import { verifyApiKey } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 });
    }
    
    const apiKey = authHeader.substring(7);
    if (!verifyApiKey(apiKey)) {
      return NextResponse.json({ error: 'Invalid API key format' }, { status: 401 });
    }
    
    const user = await getUserByApiKey(apiKey);
    if (!user) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 401 });
    }
    
    const invoice = await getInvoice(id, user.id);
    if (!invoice) {
      return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
    }
    
    return NextResponse.json({ invoice });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { action } = await request.json();
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 });
    }
    
    const apiKey = authHeader.substring(7);
    if (!verifyApiKey(apiKey)) {
      return NextResponse.json({ error: 'Invalid API key format' }, { status: 401 });
    }
    
    const user = await getUserByApiKey(apiKey);
    if (!user) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 401 });
    }
    
    if (action === 'cancel') {
      const invoice = await cancelInvoice(id, user.id);
      return NextResponse.json({ invoice, message: 'Invoice cancelled successfully' });
    }
    
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    if (errorMessage.includes('not found')) {
      return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
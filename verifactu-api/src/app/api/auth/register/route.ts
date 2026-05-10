import { NextRequest, NextResponse } from 'next/server';
import { createUser, createApiKey } from '@/lib/api';
import { hashPassword, generateToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name } = body;
    
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    const user = await createUser(email, password, name);
    
    const defaultKey = await createApiKey(user.id, 'Default');
    
    const token = generateToken(user.id, user.email);
    
    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        plan: user.plan,
      },
      token,
      apiKey: defaultKey.key,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    if (errorMessage.includes('already exists')) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
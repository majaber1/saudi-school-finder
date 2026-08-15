import { NextResponse } from 'next/server';
import crypto from 'crypto';

function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

const DEMO_USERS: Record<string, { name: string; hash: string }> = {
  'demo@school.sa': { name: 'Demo Parent', hash: hashPassword('Demo123!') },
};

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
  }
  const user = DEMO_USERS[email.toLowerCase()];
  if (!user || user.hash !== hashPassword(password)) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  return NextResponse.json({ user: { name: user.name, email } });
}

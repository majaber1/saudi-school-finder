import crypto from 'crypto';

function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

const DEMO_USERS: Record<string, { name: string; hash: string }> = {
  'demo@school.sa': { name: 'Demo Parent', hash: hashPassword('Demo123!') },
};

function validateLogin(email: string, password: string) {
  if (!email || !password) return { error: 'Email and password required', status: 400 };
  const user = DEMO_USERS[email.toLowerCase()];
  if (!user || user.hash !== hashPassword(password)) return { error: 'Invalid credentials', status: 401 };
  return { user: { name: user.name, email } };
}

function validateRegister(name: string, email: string, password: string) {
  if (!name || !email || !password) return { error: 'All fields required', status: 400 };
  if (password.length < 8) return { error: 'Password must be at least 8 characters', status: 400 };
  if (!email.includes('@')) return { error: 'Invalid email format', status: 400 };
  return { user: { name, email } };
}

describe('School Finder Auth - Login', () => {
  test('rejects empty fields', () => {
    expect(validateLogin('', 'pass')).toHaveProperty('error');
    expect(validateLogin('a@b.com', '')).toHaveProperty('error');
  });

  test('rejects wrong credentials', () => {
    const r = validateLogin('demo@school.sa', 'wrong');
    expect(r.status).toBe(401);
  });

  test('accepts demo credentials', () => {
    const r = validateLogin('demo@school.sa', 'Demo123!');
    expect(r).toHaveProperty('user');
    expect((r as any).user.name).toBe('Demo Parent');
  });

  test('case-insensitive email', () => {
    expect(validateLogin('DEMO@SCHOOL.SA', 'Demo123!')).toHaveProperty('user');
  });
});

describe('School Finder Auth - Register', () => {
  test('rejects empty name', () => {
    expect(validateRegister('', 'a@b.com', 'password123')).toHaveProperty('error');
  });

  test('rejects short password', () => {
    const r = validateRegister('Test', 'a@b.com', 'short');
    expect(r.status).toBe(400);
  });

  test('rejects invalid email', () => {
    expect(validateRegister('Test', 'notanemail', 'password123')).toHaveProperty('error');
  });

  test('accepts valid registration', () => {
    const r = validateRegister('Test User', 'test@example.com', 'password123');
    expect(r).toHaveProperty('user');
  });
});

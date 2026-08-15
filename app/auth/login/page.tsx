'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Login failed'); return; }
      window.location.href = '/ar';
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  }

  return (
    <div dir="rtl" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 40, width: '100%', maxWidth: 420, boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', textAlign: 'center', marginBottom: 8 }}>تسجيل الدخول</h1>
        <p style={{ fontSize: '0.85rem', color: '#64748b', textAlign: 'center', marginBottom: 24 }}>الباحث السعودي عن المدارس</p>
        {error && <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '8px 12px', marginBottom: 16, color: '#dc2626', fontSize: '0.8rem' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginBottom: 6 }}>البريد الإلكتروني</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="email@example.com" style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #e2e8f0', background: '#f8fafc', color: '#1e293b', fontSize: '0.9rem', marginBottom: 16, outline: 'none', direction: 'ltr' }} />
          <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginBottom: 6 }}>كلمة المرور</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="********" style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #e2e8f0', background: '#f8fafc', color: '#1e293b', fontSize: '0.9rem', marginBottom: 24, outline: 'none', direction: 'ltr' }} />
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '12px', borderRadius: 8, border: 'none', background: '#2563eb', color: '#fff', fontSize: '0.9rem', fontWeight: 700, cursor: loading ? 'wait' : 'pointer' }}>{loading ? '...' : 'دخول'}</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: 16, fontSize: '0.8rem', color: '#64748b' }}>ليس لديك حساب؟ <Link href="/auth/register" style={{ color: '#2563eb' }}>إنشاء حساب</Link></p>
        <div style={{ textAlign: 'center', marginTop: 12, fontSize: '0.72rem', color: '#94a3b8', background: '#f1f5f9', borderRadius: 8, padding: '8px' }}>Demo: demo@school.sa / Demo123!</div>
      </div>
    </div>
  );
}

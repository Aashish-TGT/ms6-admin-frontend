'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveToken } from '@/lib/auth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Dummy login check for now
      if (email === 'admin@example.com' && password === 'admin123') {
        const dummyToken = 'mock-jwt-token';
        saveToken(dummyToken);
        router.push('/dashboard'); // ✅ Redirect to dashboard
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 bg-white p-6 rounded-xl shadow">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </form>
  );
}

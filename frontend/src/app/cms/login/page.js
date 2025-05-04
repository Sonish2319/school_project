'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.elements.namedItem('username').value;
    const password = form.elements.namedItem('password').value;

    // Dummy credentials
    if (username === 'admin' && password === 'password') {
      Cookies.set('cms_auth', 'true');
      router.push('/cms/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>CMS Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input name="username" placeholder="Username" /><br />
        <input name="password" type="password" placeholder="Password" /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

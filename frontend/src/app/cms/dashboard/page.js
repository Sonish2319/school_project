'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuth = Cookies.get('cms_auth');
    if (!isAuth) {
      router.replace('/cms/login');
    }
  }, [router]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>CMS Dashboard</h2>
      <p>Welcome, admin!</p>
    </div>
  );
}

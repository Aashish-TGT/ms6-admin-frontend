'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getToken } from './auth';

export default function withAuth(Component: any) {
  return function ProtectedRoute(props: any) {
    const router = useRouter();
    const token = getToken();

    useEffect(() => {
      if (!token) {
        router.push('/login');
      }
    }, [token]);

    return token ? <Component {...props} /> : null;
  };
}

'use client';

import './globals.css';
import type { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/login');
  };

  const showHeader = pathname !== '/login';

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {/* Top Bar with Logout */}
        {showHeader && (
          <div className="w-full bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-semibold">Admin Panel</h1>
            <button
              onClick={handleLogout}
              className="cursor-pointer bg-white text-blue-600 font-semibold px-5 py-2 rounded-xl shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              Logout
            </button>
          </div>
        )}

        {/* Main Page Content */}
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}

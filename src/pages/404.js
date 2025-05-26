// src/pages/404.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../components/AuthProvider';

export default function Custom404() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace('/dashboard');
      } else {
        router.replace('/login');
      }
    }
  }, [user, loading, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-300">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">404</h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 transition-colors duration-300">Seite nicht gefunden</p>
      <p className="mt-2 text-gray-500 dark:text-gray-300 transition-colors duration-300">Du wirst in Kürze weitergeleitet...</p>
      
      {/* Ladeindikator */}
      <div className="mt-6">
        <svg
          className="animate-spin h-8 w-8 text-orange-500 dark:text-orange-400 transition-colors duration-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://api.tripkolic.com/api/v1/task/login', {
        userId,
        password,
      });

      if (response.data && response.data.status) {
        router.push('/profile');
      }
      else {
        setError('Giriş başarısız oldu. Lütfen tekrar deneyin.');
      }
    } catch  {
      setError('Giriş başarısız oldu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-6 w-48 h-16 relative">
            <Image 
              src="/1.png" 
              alt="Logo" 
              fill 
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <h2 className="text-2xl font-semibold text-orange-400">
            LOG IN
          </h2>
        </div>
        
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              id="userId"
              name="userId"
              type="text"
              required
              className="pl-10 w-full p-3 border text-gray-500 shadow-md shadow-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="pl-10 w-full p-3 border text-gray-500 shadow-md shadow-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-left">
            <Link href="/forgot-password" className="text-gray-700 text-sm underline hover:text-gray-900 font-semibold">
              Forgot Password
            </Link>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-orange-400 text-white rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-colors font-bold"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Logging in...</span>
              </div>
            ) : (
              'Log In'
            )}
          </button>
        </form>

        <div className="mt-24 text-center">
          <p className="text-orange-400 mb-3 font-medium">Register as</p>
          <div className="flex space-x-4 justify-center">
            <button className="px-6 py-2 bg-sky-400 text-white rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-300 transition-colors font-bold">
              Operator
            </button>
            <button className="px-6 py-2 bg-sky-400 text-white rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-300 transition-colors font-bold">
              Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

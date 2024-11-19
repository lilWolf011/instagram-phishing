// pages/_app.js
"use client";
import { useState, useEffect } from 'react';
import LoginPage from '@/components/login.js';
import Loading from '@/components/loading.js';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Loading /> : <LoginPage />;
}

export default MyApp;

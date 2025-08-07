import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    
    const isRussian = browserLanguage.startsWith('ru');
    
    router.push(isRussian ? '/ru' : '/en');
  }, [router]);

  return (
    <div>
    </div>
  );
}
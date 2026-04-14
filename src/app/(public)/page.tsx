'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
     router.push('/vendors');
  }, [router]);
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div></div>
    </main>
  );
}

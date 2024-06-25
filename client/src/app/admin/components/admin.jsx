'use client';

import { useUser } from '@/context/userContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Admin() {
  // * Hooks
  const { user, isLoading } = useUser();
  const router = useRouter();

  // * Life Cycle
  useEffect(() => {
    if (!user) {
      router.push('/ingresar');
    }
  });

  return (
    <main className='w-full flex justify-center items-center'>
      {isLoading && 'Cargando...'}
      {!isLoading && user && user.email}
    </main>
  );
}

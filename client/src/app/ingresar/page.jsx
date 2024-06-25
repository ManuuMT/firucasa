'use client';
import { useEffect, useState } from 'react';
import LoginCard from './components/LoginCard';
import RegisterCard from './components/RegisterCard';
import { useUser } from '@/context/userContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  // * Hooks
  const [hasAccount, setHasAccount] = useState(true);
  const { user, isLoading } = useUser();
  const router = useRouter();

  // * Life Cycle
  useEffect(() => {
    if (user) router.push('/admin');
  }, [user]);

  return (
    <main className='flex justify-center mt-10'>
      {isLoading && 'Cargando...'}

      {!isLoading &&
        !user &&
        (hasAccount ? (
          <LoginCard setHasAccount={setHasAccount} />
        ) : (
          <RegisterCard setHasAccount={setHasAccount} />
        ))}
    </main>
  );
}

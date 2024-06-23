'use client';

import UserContext from '@/context/userContext';
import { useContext } from 'react';

export default function Admin() {
  // * Hooks
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <main className='w-full flex justify-center items-center'>
      {user.email}
    </main>
  );
}

'use client';

import Link from 'next/link';
import Logo from '../assets/img/LogoNav.png';
import { ThemeToggle } from './ThemeToggle';

const items = [
  {
    href: '#',
    text: 'Nosotros',
    id: 1,
  },
  {
    href: '#',
    text: 'Adopciones',
    id: 2,
  },
  {
    href: '#',
    text: 'FAQ',
    id: 3,
  },
  {
    href: '#',
    text: 'Contacto',
    id: 4,
  },
];

export default function Navbar() {
  return (
    <header className='w-full px-24 py-8 text-xl font-semibold'>
      <nav className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='w-[100] h-16'>
            <Link href='/'>
              <img
                src={Logo.src}
                alt='Firucasa'
                className='w-full h-full object-contain'
              />
            </Link>
          </div>
          <div>
            {items.map(item => (
              <Link key={item.id} href={item.href} className='px-2'>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

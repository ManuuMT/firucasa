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
    href: 'adopciones',
    text: 'Adopciones',
    id: 2,
  },
  {
    href: 'hogares',
    text: 'Hogares',
    id: 3,
  },
  {
    href: '#',
    text: 'FAQ',
    id: 4,
  },
  {
    href: '#',
    text: 'Contacto',
    id: 5,
  },
];

export default function Navbar() {
  return (
    <header className='w-full px-24 py-8 text-xl font-semibold sticky z-10 top-0 shadow-md bg-card'>
      <nav className='flex items-center justify-between container'>
        <div className='flex items-center gap-20'>
          <div className='w-[100] h-10'>
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
              <Link
                key={item.id}
                href={item.href}
                className='px-5 hover:text-primary transition-colors '
              >
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

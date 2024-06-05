'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Sidebar = ({ user }) => {
  const pathname = usePathname();

  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href='/' className='logo-container mb-12 cursor-pointer flex items-center gap-2'>
          <Image
            src="/icons/capitalclub.png"
            width={40} // Adjusted width
            height={40} // Adjusted height
            alt='Logo'
            className='logo-image'
          />
          <h1 className='sidebar-logo text-lg font-bold'>Capital Club</h1> {/* Adjusted text size and font */}
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = item.route === pathname || pathname.startsWith(`${item.route}/`);

          return (
            <Link 
              href={item.route}
              key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
}

export default Sidebar;
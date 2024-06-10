'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

const Sidebar = ({ user }) => {
  const pathname = usePathname();

  return (
    <section className="sidebar flex flex-col h-full bg-gray-100">
      <nav className="flex-grow flex flex-col gap-4 p-4">
        <Link href="/" className="logo-container mb-6 md:mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/capitalclub.png"
            width={40}
            height={40}
            alt="Logo"
            className="logo-image"
          />
          <h1 className="sidebar-logo text-lg font-bold hidden md:block">Capital Club</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = item.route === pathname || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link flex items-center gap-4 p-2 rounded-md', { 'bg-blue-500 text-white': isActive })}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className={cn('sidebar-icon', { 'brightness-75': isActive })}
              />
              <p className={cn('sidebar-label text-base', { 'text-white': isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto p-4">
        <Footer user={user} type="desktop" />
      </div>
    </section>
  );
};

export default Sidebar;

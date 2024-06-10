'use client';

// MobileNav Component
import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Footer from '../Footer'; // Import the Footer component

const MobileNav = ({ user }) => {
  const pathname = usePathname();

  return (
    <section className="w-full">
      <Sheet>
        <SheetTrigger asChild>
          <div className="fixed top-4 right-4 z-50">
            <Image 
              src="/icons/hamburger.svg"
              width={30}
              height={30}
              alt="menu"
              className="cursor-pointer"
            />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className='border-none bg-white p-4'>
          <Link href='/' className='cursor-pointer flex items-center gap-2 mb-6'>
            <Image
              src="/icons/capitalclub.png"
              width={40}
              height={40}
              alt='Logo'
              className='logo-image'
            />
            <h1 className='text-2xl font-ibm-plex-serif font-bold text-black'>Capital Club</h1>
          </Link>

          <div className='mobilenav-sheet'>
            <SheetClose asChild>
              <nav className='flex flex-col gap-4'>
                {sidebarLinks.map((item) => {
                  const isActive = item.route === pathname || pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link 
                        href={item.route}
                        className={cn('flex items-center gap-2 px-4 py-2 rounded-md transition-all', 
                            { 'bg-bank-gradient text-white': isActive, 'text-black': !isActive })}
                      >
                        <Image 
                          src={item.imgURL}
                          alt={item.label}
                          width={24}
                          height={24}
                          className={cn({
                            'brightness-75 invert-0': isActive
                          })}
                        />
                        <p className={cn('text-lg font-semibold', { 'text-white': isActive })}>
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                {/* Pass the user prop to the Footer component and the type prop */}
                <Footer user={user} type="mobile" />
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
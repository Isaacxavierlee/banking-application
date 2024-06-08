'use client';

import React from 'react';
import Image from 'next/image';
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/ui/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Isaac', lastName: 'Xavier' };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      
      <div className="flex flex-grow flex-col">
        <div className="root-layout p-4 flex items-center gap-2">
          <Image 
            src="/icons/capitalclub.png"
            width={30}
            height={30}
            alt="menu icon"
          />
          <MobileNav user={loggedIn} />
        </div>

        <div className="flex-grow">
          {children}
        </div>
      </div>
    </main>
  );
}

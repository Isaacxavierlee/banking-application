import React from 'react';
import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from '@/lib/actions/user.actions';

import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = await getLoggedInUser();

  if(!loggedIn) redirect('/sign-in')

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

'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import CustomInput from './CustomInput';
import { authformSchema } from '@/lib/utils';

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm<z.infer<typeof authformSchema>>({
    resolver: zodResolver(authformSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof authformSchema>) {
    console.log(values);
  }

  if (!mounted) {
    return null;
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-2 mb-6">
          <Image
            src="/icons/capitalclub.png"
            width={40}
            height={40}
            alt="Logo"
            className="logo-image"
          />
          <h1 className="text-2xl font-ibm-plex-serif font-bold text-black">
            Capital Club
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user ? 'Link your account to get started' : 'Please enter your details'}
          </p>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">{/* plaidlink */}</div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
            />
            <CustomInput
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )}
    </section>
  );
};

export default AuthForm;

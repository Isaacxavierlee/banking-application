'use client';
import React from 'react';
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalancebox from '@/components/ui/TotalBalancebox';

const Home = () => {
  const loggedIn = { firstName: 'Isaac' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>
        <TotalBalancebox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />
      </div>
    </section>
  );
}

export default Home;

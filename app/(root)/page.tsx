// Home component
import React from 'react';
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalancebox from '@/components/ui/TotalBalancebox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = {
    firstName: 'Isaac',
    lastName: 'Xavier',
    email: 'Reivax.caasi@gmail.com'
  };

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
          <TotalBalancebox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={78000.35}
          />
        </header>
        <div>Recent Transactions</div>
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[
          { currentBalance: 123 },
          { currentBalance: 123 }
        ]}
      />
    </section>
  );
}

export default Home;

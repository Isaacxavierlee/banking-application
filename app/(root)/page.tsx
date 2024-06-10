'use client'

import React, { useEffect, useState } from 'react';
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalancebox from '@/components/ui/TotalBalancebox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getLoggedInUser();
        setLoggedIn(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn ? loggedIn.name : 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalancebox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={loggedIn ? 78000.35 : 0} // Adjust the balance based on user login status
          />
        </header>
        <div>Recent Transactions</div>
      </div>
      {loggedIn && (
        <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[
            { $id: '1', name: 'Bank 1', currentBalance: 500000, mask: '1234' },
            { $id: '2', name: 'Bank 2', currentBalance: 100000, mask: '5678' }
          ]}
        />
      )}
    </section>
  );
}

export default Home;

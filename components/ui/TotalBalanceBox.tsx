import React from 'react';

const TotalBalancebox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance
}) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        Total Balance Box
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
          Bank Accounts: {totalBanks}
        </h2>
        <p className='header-2'>
          Total Current Balance: ${totalCurrentBalance}
        </p>
      </div>
    </section>
  );
}

export default TotalBalancebox;

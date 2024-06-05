import React from 'react';

const TotalBalancebox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance
}) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        {/* Uncomment and insert DonutChart component here */}
        {/* <DonutChart data={accounts} /> */}
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
          Bank Accounts: {totalBanks}
        </h2>

        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>
            Total Current Balance: ${totalCurrentBalance.toFixed(2)}
          </p>

          <p className='total-balance-amount flex-center gap-2'>
            {totalCurrentBalance.toFixed(2)}
          </p>
        </div>
      </div>
    </section>
  );
}

export default TotalBalancebox;

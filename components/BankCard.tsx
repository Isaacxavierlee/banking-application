import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatAmount } from '@/lib/utils';

const BankCard = ({ account, userName, showBalance }) => {
  return (
    <Link href="/" className="bank-card">
      <div className="flex flex-col rounded-lg shadow-md bg-gray-800 p-4 relative">

        {/* Bank Card Content */}
        <div className="bank-card-content">
          <h1 className="text-lg font-semibold text-white">
            {account.name || userName}
          </h1>
          {/* Always show the balance */}
          <p className="text-sm font-semibold text-gray-400">
            Balance: {formatAmount(account.currentBalance)}
          </p>
        </div>

        {/* Cardholder and Card Number */}
        <div className="mt-4">
          <div className="text-xs font-semibold text-gray-400 mb-1">Cardholder</div>
          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold text-white">{userName}</p>
            <p className="text-sm font-semibold text-gray-400">●● / ●●</p>
          </div>
          <div className="text-xs font-semibold text-gray-400 mt-2">Card Number</div>
          <div className="text-sm font-semibold text-gray-300">
          •••• •••• •••• <span className="text-xs">{account?.mask}</span>
          </div>
        </div>

      </div>

      {/* Payment Icons */}
      <div className="mt-4 flex items-center">
        <Image 
          src="/icons/Paypass.svg"
          width={20}
          height={24}
          alt="pay"
        />
        <Image 
          src="/icons/mastercard.svg"
          width={45}
          height={32}
          alt="mastercard"
          className="ml-2"
        />
      </div>

      {/* Background Lines */}
      <Image 
        src="/icons/lines.png"
        width={316}
        height={190}
        alt="lines"
        className="absolute top-0 left-0"
      />
    </Link>
  );
}

export default BankCard;

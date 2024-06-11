import React, { FC } from 'react';

import { cn } from '@/app/@utils/index';

interface NavTabsProps {
  options: { key: string; value: string }[];
  transactionType: string;
  setTransactionType: (transactionType: string) => void;
}

const NavTabs: FC<NavTabsProps> = ({ options, transactionType, setTransactionType }) => {
  return (
    <div className='flex'>
      <div className='flex rounded-lg bg-gray-100 p-1 transition hover:bg-gray-200'>
        <nav className='flex space-x-1'>
          {options.map((option) => {
            return (
              <button
                key={option.key}
                type='button'
                className={cn(
                  'inline-flex items-center gap-x-2 rounded-lg px-3 py-2 text-sm font-medium hover:text-gray-700 lg:px-4 lg:py-3',
                  {
                    'bg-white': transactionType === option.key,
                  },
                )}
                onClick={() => {
                  setTransactionType(option.key);
                }}>
                {option.value}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default NavTabs;

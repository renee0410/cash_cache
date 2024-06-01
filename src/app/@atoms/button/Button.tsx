import React, { FC } from 'react';
import { cn } from '@/app/@utils/index';

interface ButtonProps {
  size: 'sm' | 'md' | 'lg';
  isFull?: boolean;
  text: string;
  color: 'primary';
}

const Button: FC<ButtonProps> = ({ size, isFull, text, color }) => {
  return (
    <>
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-lg border border-transparent text-sm font-semibold',
          {
            'px-3 py-2': size === 'sm',
            'px-4 py-3': size === 'md',
            'p-4': size === 'lg',
            'w-full': isFull,
          },
          {
            'bg-primary text-white': color === 'primary',
          },
        )}>
        {text}
      </button>
    </>
  );
};

export default Button;

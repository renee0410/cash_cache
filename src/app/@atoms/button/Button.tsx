import React, { FC } from 'react';

import { cn } from '@/app/@utils/index';
import { SvgIcon } from '@/app/@atoms/index';

interface ButtonProps {
  size: 'sm' | 'md' | 'lg';
  isFull?: boolean;
  text: string;
  color: 'primary' | 'red';
  style?: 'solid' | 'outline';
  type?: 'submit' | 'button';
  iconName?: string;
}

const Button: FC<ButtonProps> = ({ size, isFull, text, color = 'primary', style = 'solid', type = 'button', iconName }) => {
  return (
    <>
      <button
        type={type}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg border border-transparent text-sm font-semibold',

          {
            'px-3 py-2': size === 'sm',
            'px-4 py-3': size === 'md',
            'p-4': size === 'lg',
            'w-full': isFull,
          },
          {
            'bg-primary text-white': color === 'primary' && style === 'solid',
            'bg-red-500 text-white': color === 'red' && style === 'solid',
          },
          {
            'border-primary text-primary': color === 'primary' && style === 'outline',
            'border-red-500 text-red-500': color === 'red' && style === 'outline',
          },
        )}>
        {iconName && <SvgIcon iconName={iconName} size={24}></SvgIcon>}
        {text}
      </button>
    </>
  );
};

export default Button;

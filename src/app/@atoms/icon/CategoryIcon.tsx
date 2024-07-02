import React, { FC } from 'react';

import SvgIcon from './SvgIcon';
import { cn } from '@/app/@utils';

interface CategoryIconProps {
  size: 'sm' | 'md';
  color: string;
  iconName: string;
}

const CategoryIcon: FC<CategoryIconProps> = ({ size, color, iconName }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full p-1',
        {
          'size-10': size === 'sm',
          'size-12': size === 'md',
        },
        {
          'bg-yellow-300': color === 'yellow',
          'bg-red-300': color === 'red',
          'bg-blue-300': color === 'blue',
          'bg-green-300': color === 'green',
          'bg-purple-300': color === 'purple',
          'bg-orange-300': color === 'orange',
          'bg-pink-300': color === 'pink',
          'bg-indigo-300': color === 'indigo',
          'bg-gray-300': color === 'gray',
          'bg-lime-300': color === 'lime',
          'bg-teal-300': color === 'teal',
          'bg-cyan-300': color === 'cyan',
          'bg-fuchsia-300': color === 'fuchsia',
        },
      )}>
      <SvgIcon iconName={iconName} size={24} className='text-white' />
    </div>
  );
};

export default CategoryIcon;

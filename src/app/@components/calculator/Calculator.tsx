import React from 'react';

import { SvgIcon } from '@/app/@atoms/index';
import CalculatorOptions from './CalculatorOptions';

const Calculator = () => {
  return (
    <div className='grid h-full grid-cols-4 gap-5'>
      {CalculatorOptions.map((option) => {
        return (
          <button className='m-auto p-2' key={option.value}>
            {option.icon ? (
              <SvgIcon iconName={option.icon} size={24} weight={option.icon === 'DotOutline' ? 'fill' : 'regular'} />
            ) : (
              <span className='text-xl'>{option.value}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Calculator;

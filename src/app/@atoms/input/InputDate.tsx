import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { cn } from '@/app/@utils/index';

interface InputDateProps {
  isFull?: boolean;
  name: string;
  label: string;
  required?: boolean;
}

const InputDate: FC<InputDateProps> = ({ isFull, name, required, label }) => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <label htmlFor={name} className='flex'>
        <input
          id={name}
          type='date'
          className={cn(
            'rounded border border-gray-200 px-3 py-2 placeholder:text-sm',
            {
              'w-full': isFull,
            },
            {
              'border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700': !!errors[name]?.message,
            },
          )}
          {...register(name, {
            required: required ? t('form.required', { label }) : false,
          })}
        />
        {errors[name]?.message && (
          <span className='absolute bottom-[-14px] text-xs text-red-700'>{String(errors[name]?.message)}</span>
        )}
      </label>
    </>
  );
};

export default InputDate;

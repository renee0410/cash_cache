import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/app/@utils/index';

interface InputProps {
  label: string;
  name: string;
  type: 'email' | 'password' | 'text';
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
}

const Input: FC<InputProps> = ({ label, name, type, required, pattern, minLength = 1, maxLength = 100 }) => {
  // i18n
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label htmlFor={name} className='flex flex-col'>
        <span className='mb-1 block'>{label}*</span>
        <input
          type={type}
          placeholder={t('form.enter', { label })}
          className={cn('rounded border border-gray-200 px-3 py-2 placeholder:text-sm', {
            'border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700': !!errors[name]?.message,
          })}
          id={name}
          {...register(name, {
            required: required ? t('form.required', { label }) : false,
            pattern: pattern ? { value: pattern, message: t('form.pattern', { label }) } : undefined,
            minLength: { value: minLength, message: t('form.minLength', { minLength }) },
            maxLength: { value: maxLength, message: t('form.maxLength', { maxLength }) },
          })}
        />
        {errors[name]?.message && <span className='text-xs text-red-700'>{String(errors[name]?.message)}</span>}
      </label>
    </>
  );
};

export default Input;

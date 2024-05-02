import React from 'react';
import { useTranslation } from 'react-i18next';

import { SelectLang } from '@/app/@components/index';

const LoginPage = () => {
  // i18n
  const { t } = useTranslation();

  return (
    <>
      <div className='bg-primary z-10 flex size-64 h-screen w-full items-center justify-center p-6'>
        {/* 語系切換 */}
        <SelectLang />
        {/* 登入區塊 */}
        <div className='min-w-80 rounded bg-white p-6 shadow-lg'>
          <span className='mb-5 block text-center text-2xl'>{t('nav.login')}</span>
          <form action=''>
            <div className='space-y-3'>
              {/* Email */}
              <label htmlFor='email' className='flex flex-col'>
                <span className='mb-1 block'>{t('$.email')}</span>
                <input
                  type='email'
                  placeholder={`請輸入${t('$.email')}`}
                  className='rounded border border-gray-200 px-3 py-2 placeholder:text-sm'
                  name='email'
                  id='email'
                />
              </label>
              {/* Password */}
              <label htmlFor='password' className='flex flex-col'>
                <span className='mb-1 block'>{t('$.password')}</span>
                <input
                  type='password'
                  placeholder={`請輸入${t('$.password')}`}
                  className='rounded border border-gray-200 px-3 py-2 placeholder:text-sm'
                  name='email'
                  id='password'
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

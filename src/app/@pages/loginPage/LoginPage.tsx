import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { SelectLang } from '@/app/@components/index';
import { Input, Button } from '@/app/@atoms/index';

type LoginData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  // i18n
  const { t } = useTranslation();
  const navigate = useNavigate();
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      email: null,
      password: null,
    },
  });

  const onSubmit = (data: LoginData) => {
    if (data) {
      navigate('/');
    }
  };

  return (
    <>
      <div className='z-10 flex size-64 h-screen w-full flex-col bg-primary p-6'>
        {/* 語系切換 */}
        <div className='mr-6 self-end'>
          <SelectLang color='white' />
        </div>

        {/* 登入區塊 */}
        <div className='m-auto min-w-80 rounded bg-white p-6 shadow-lg'>
          <span className='mb-5 block text-center text-2xl'>{t('nav.login')}</span>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className='space-y-3'>
                {/* Email */}
                <Input label={t('$.email')} name='email' type='email' required={true} pattern={/^\S+@\S+$/i} />
                {/* Password */}
                <Input label={t('$.password')} name='password' type='password' required={true} maxLength={12} />
                <Button size='md' text='登入' color='primary' type='submit' isFull={true} />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

import React from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';

import { Button, Input } from '@/app/@atoms';
import { formatPhone } from '@/app/@utils';

interface LoginData {
  phone: string | null;
}

const DashboardPage = () => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    if (!data.phone) {
      return;
    }
    const formattedPhone = formatPhone(data.phone!);
    console.log(formattedPhone);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className='space-y-3'>
            {/* Email */}
            <Input
              label='手機號碼'
              name='phone'
              type='phone'
              required={true}
              validate={(value) => {
                if (value.startsWith('0') && value.length === 10) {
                  return true;
                }
                if (value.startsWith('9') && value.length === 9) {
                  return true;
                }
                return '手機號碼格式不正確';
              }}
            />
            <Button type='submit' size='sm' text='提交' color='primary' />
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default DashboardPage;

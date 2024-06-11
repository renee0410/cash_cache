import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import { NavTabs, Calculator } from '@/app/@components/index';
import { SvgIcon, InputDate } from '@/app/@atoms/index';

interface MoneyLogPopup {
  transactionType: string;
  setTransactionType: (transactionType: string) => void;
}

interface MoneyLogData {
  transactionTime: string | null;
}

const MoneyLogPopup: FC<MoneyLogPopup> = ({ transactionType, setTransactionType }) => {
  const { t } = useTranslation();

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      transactionTime: null,
    },
  });

  const NavTabsOptions = [
    { key: 'expense', value: t('$.expense') },
    { key: 'income', value: t('$.income') },
  ];

  const onSubmit: SubmitHandler<MoneyLogData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className='z-300 absolute left-0 top-0 flex size-full flex-col bg-white p-6'>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-1 flex-col space-y-4'>
            {/* Tabs */}
            <NavTabs options={NavTabsOptions} transactionType={transactionType} setTransactionType={setTransactionType} />

            <div className='flex items-center justify-between'>
              {/* Category */}
              <div className='inline-flex flex-col items-center space-y-1 rounded bg-white px-5 py-2 shadow'>
                <div className='flex size-10 items-center justify-center rounded-full bg-yellow-300 p-1'>
                  <SvgIcon iconName='ForkKnife' size={24} className='text-white' />
                </div>
                <span className='text-sm'>飲食</span>
                <SvgIcon iconName='CaretDown' />
              </div>
              {/* Amount */}
              <span className='text-4xl font-bold'>$ 0</span>
            </div>

            {/* Date */}

            <InputDate isFull name='transactionTime' label='date' required />

            {/* 計算機 */}
            <div className='mt-4 flex-1'>
              <Calculator />
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default MoneyLogPopup;

import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import { NavTabs, Calculator, Popup } from '@/app/@components/index';
import { SvgIcon, InputDate, CategoryIcon } from '@/app/@atoms/index';

interface MoneyLogPopup {
  transactionType: string;
  setTransactionType: (transactionType: string) => void;
}

interface MoneyLogData {
  transactionTime: string | null;
}

const MoneyLogPopup: FC<MoneyLogPopup> = ({ transactionType, setTransactionType }) => {
  // 分類彈窗
  const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false);
  // 選擇的分類
  const [selectedCategory, setSelectedCategory] = useState('food');

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

  const CategoryOptions = [
    {
      key: 'food',
      value: t('$.food'),
      icon: 'ForkKnife',
      color: 'yellow',
    },
    {
      key: 'clothes',
      value: t('$.clothes'),
      icon: 'TShirt',
      color: 'blue',
    },
    {
      key: 'shopping',
      value: t('$.shopping'),
      icon: 'ShoppingCartSimple',
      color: 'fuchsia',
    },
    {
      key: 'transport',
      value: t('$.transport'),
      icon: 'Car',
      color: 'green',
    },
    {
      key: 'medical',
      value: t('$.medical'),
      icon: 'Stethoscope',
      color: 'red',
    },
    {
      key: 'entertainment',
      value: t('$.entertainment'),
      icon: 'GameController',
      color: 'purple',
    },
    {
      key: 'home',
      value: t('$.home'),
      icon: 'HouseLine',
      color: 'orange',
    },
    {
      key: 'installment',
      value: t('$.installment'),
      icon: 'CreditCard',
      color: 'cyan',
    },
    {
      key: 'insurance',
      value: t('$.insurance'),
      icon: 'HandHeart',
      color: 'indigo',
    },
    {
      key: 'gift',
      value: t('$.gift'),
      icon: 'Gift',
      color: 'pink',
    },
    {
      key: 'beauty',
      value: t('$.beauty'),
      icon: 'HairDryer',
      color: 'lime',
    },
    {
      key: 'travel',
      value: t('$.travel'),
      icon: 'Island',
      color: 'teal',
    },
    {
      key: 'others',
      value: t('$.others'),
      icon: 'DotsThreeOutline',
      color: 'gray',
    },
  ];

  const showSelectedCategory = () => {
    return CategoryOptions.find((category) => category.key === selectedCategory);
  };

  const onSubmit: SubmitHandler<MoneyLogData> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    showSelectedCategory();
  }, [selectedCategory]);

  const selected = showSelectedCategory();

  return (
    <>
      <div className='z-300 absolute left-0 top-0 flex size-full flex-col bg-white p-6'>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-1 flex-col space-y-4'>
            {/* Tabs */}
            <NavTabs options={NavTabsOptions} transactionType={transactionType} setTransactionType={setTransactionType} />

            <div className='flex items-center justify-between'>
              {/* Category */}
              <div
                className='inline-flex cursor-pointer flex-col items-center space-y-1 rounded bg-white px-5 py-2 shadow'
                onClick={() => setIsCategoryPopupOpen(true)}>
                <CategoryIcon size='sm' color={selected?.color || 'yellow'} iconName={selected?.icon || 'ForkKnife'} />
                <span className='mt-1 text-sm'>{selected?.value || t('$.food')}</span>
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
      {/* Category Popup */}
      <Popup isOpen={isCategoryPopupOpen} onClose={() => setIsCategoryPopupOpen(false)} title={t('$.select_category')}>
        <div className='grid w-full grid-cols-3 gap-4'>
          {CategoryOptions.map((category) => (
            <div
              key={category.key}
              className='flex cursor-pointer flex-col items-center'
              onClick={() => {
                setSelectedCategory(category.key);
                setIsCategoryPopupOpen(false);
              }}>
              <CategoryIcon size='sm' color={category.color} iconName={category.icon} />
              <span className='mt-1 text-sm'>{category.value}</span>
            </div>
          ))}
        </div>
      </Popup>
    </>
  );
};

export default MoneyLogPopup;

import React, { useState } from 'react';

import { Button } from '@/app/@atoms/index';
import { MoneyLogPopup } from '@/app/@components/index';

const ExpenseDetailPage = () => {
  // 預設為支出狀態
  const [transactionType, setTransactionType] = useState('expense');

  return (
    <>
      <div className='flex h-full flex-col space-y-6'>
        <h1 className='block text-center'>2024年5月</h1>

        <div className='m-auto flex h-20 w-1/2 max-w-[240px] flex-col items-center rounded-lg bg-white py-4 shadow-lg'>
          <span>本月支出</span>
          <span className='text-xl font-bold'>$ 1,232</span>
        </div>
        <div className='lg:ml-auto lg:w-28'>
          <Button size='md' color='primary' style='solid' type='button' text='記一筆' iconName='Calculator' isFull></Button>
        </div>

        {/* List */}
        <div className='flex-1 overflow-y-scroll'>
          <ul className='w-full divide-y divide-gray-200 '>
            <div className='sticky top-0 z-100 border-y bg-gray-200 p-4 text-center text-base font-bold'>支出明細</div>
            <li className='flex justify-between px-2 py-3 text-sm font-medium'>
              <div className='flex gap-7'>
                {/* 日期 */}
                <span>5/1</span>
                {/* 消費品項 */}
                <div className='flex flex-col'>
                  <span className='text-primary'>飲食</span>
                  <span>麥當勞</span>
                </div>
              </div>
              {/* 金額 */}
              <span>$100</span>
            </li>

            <li className='flex justify-between px-2 py-3 text-sm font-medium'>
              <div className='flex gap-7'>
                {/* 日期 */}
                <span>5/1</span>
                {/* 消費品項 */}
                <div className='flex flex-col'>
                  <span className='text-primary'>飲食</span>
                  <span>麥當勞</span>
                </div>
              </div>
              {/* 金額 */}
              <span>$100</span>
            </li>

            <li className='flex justify-between px-2 py-3 text-sm font-medium'>
              <div className='flex gap-7'>
                {/* 日期 */}
                <span>5/1</span>
                {/* 消費品項 */}
                <div className='flex flex-col'>
                  <span className='text-primary'>飲食</span>
                  <span>麥當勞</span>
                </div>
              </div>
              {/* 金額 */}
              <span>$100</span>
            </li>

            <li className='flex justify-between px-2 py-3 text-sm font-medium'>
              <div className='flex gap-7'>
                {/* 日期 */}
                <span>5/1</span>
                {/* 消費品項 */}
                <div className='flex flex-col'>
                  <span className='text-primary'>飲食</span>
                  <span>麥當勞</span>
                </div>
              </div>
              {/* 金額 */}
              <span>$100</span>
            </li>

            <li className='flex justify-between px-2 py-3 text-sm font-medium'>
              <div className='flex gap-7'>
                {/* 日期 */}
                <span>5/1</span>
                {/* 消費品項 */}
                <div className='flex flex-col'>
                  <span className='text-primary'>飲食</span>
                  <span>麥當勞</span>
                </div>
              </div>
              {/* 金額 */}
              <span>$100</span>
            </li>

            <li className='flex justify-between px-2 py-3 text-sm font-medium'>
              <div className='flex gap-7'>
                {/* 日期 */}
                <span>5/1</span>
                {/* 消費品項 */}
                <div className='flex flex-col'>
                  <span className='text-primary'>飲食</span>
                  <span>麥當勞</span>
                </div>
              </div>
              {/* 金額 */}
              <span>$100</span>
            </li>

            <li className='flex justify-between px-2 py-3 text-sm font-medium'>
              <div className='flex gap-7'>
                {/* 日期 */}
                <span>5/1</span>
                {/* 消費品項 */}
                <div className='flex flex-col'>
                  <span className='text-primary'>飲食</span>
                  <span>麥當勞</span>
                </div>
              </div>
              {/* 金額 */}
              <span>$100</span>
            </li>

            <li className='flex justify-between px-2 py-3 text-sm font-medium'>
              <div className='flex gap-7'>
                {/* 日期 */}
                <span>5/1</span>
                {/* 消費品項 */}
                <div className='flex flex-col'>
                  <span className='text-primary'>飲食</span>
                  <span>麥當勞</span>
                </div>
              </div>
              {/* 金額 */}
              <span>$100</span>
            </li>

            <li className='flex justify-between px-2 py-3 text-sm font-medium'>
              <div className='flex gap-7'>
                {/* 日期 */}
                <span>5/1</span>
                {/* 消費品項 */}
                <div className='flex flex-col'>
                  <span className='text-primary'>飲食</span>
                  <span>麥當勞</span>
                </div>
              </div>
              {/* 金額 */}
              <span>$100</span>
            </li>

            <li className='flex justify-between px-2 py-3 text-sm font-medium'>
              <div className='flex gap-7'>
                {/* 日期 */}
                <span>5/1</span>
                {/* 消費品項 */}
                <div className='flex flex-col'>
                  <span className='text-primary'>飲食</span>
                  <span>麥當勞</span>
                </div>
              </div>
              {/* 金額 */}
              <span>$100</span>
            </li>

            <li className='flex justify-between px-2 py-3 text-sm font-medium'>
              <div className='flex gap-7'>
                {/* 日期 */}
                <span>5/1</span>
                {/* 消費品項 */}
                <div className='flex flex-col'>
                  <span className='text-primary'>飲食</span>
                  <span>麥當勞</span>
                </div>
              </div>
              {/* 金額 */}
              <span>$100</span>
            </li>
          </ul>
        </div>
      </div>
      <MoneyLogPopup transactionType={transactionType} setTransactionType={setTransactionType}></MoneyLogPopup>
    </>
  );
};

export default ExpenseDetailPage;

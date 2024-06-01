import React from 'react';

const ExpenseDetailPage = () => {
  return (
    <div className='space-y-6'>
      <h1 className='block text-center'>2024年5月</h1>
      <div className='m-auto flex h-20 w-1/2 max-w-[240px] flex-col items-center rounded-lg bg-white py-4 shadow-lg'>
        <span>本月支出</span>
        <span className='text-xl font-bold'>$ 1,232</span>
      </div>

      {/* List */}
      <div>
        <ul className='max-h-[570px] w-full divide-y divide-gray-200 overflow-y-scroll'>
          <div className='z-100 sticky top-0 border-y bg-gray-200 p-4 text-center text-base font-bold'>支出明細</div>
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
  );
};

export default ExpenseDetailPage;
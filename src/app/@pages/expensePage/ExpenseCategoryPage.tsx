import React, { useState } from 'react';

import { SvgIcon } from '@/app/@atoms/index';

const ExpenseCategoryPage = () => {
  const [isShowCategoryList, setIsShowCategoryList] = useState(false);

  return (
    <div className='flex h-full flex-col space-y-3'>
      <div className='text-2xl'>2024年6月</div>
      <div className='flex flex-1 columns-2 flex-col gap-8 md:flex-row'>
        {/* l-block */}
        <div className='h-60 w-full rounded border'></div>
        {/* r-block */}
        <div className='size-full rounded border px-4'>
          <div className='space-y-4 divide-y divide-gray-200'>
            {/* 分類 */}
            <div className='flex cursor-pointer items-center p-3' onClick={() => setIsShowCategoryList(!isShowCategoryList)}>
              <div className='flex w-full'>
                <div className='flex size-12 items-center justify-center rounded-full bg-yellow-300 p-1'>
                  <SvgIcon iconName='ForkKnife' size={24} className='text-white' />
                </div>
                <div className='ml-4 flex-1 space-y-3'>
                  <div className='space-y-2'>
                    <div className='flex items-center'>
                      <div className='flex flex-col'>
                        <span className='text-lg'>飲食</span>
                        <span className='text-sm'>七筆資料</span>
                      </div>

                      <span className='ml-auto text-xl'>$-785</span>
                    </div>
                    {/* 進度條 */}
                    <div className='flex h-4 w-full overflow-hidden rounded-full bg-gray-200'>
                      <div className='flex w-1/4 flex-col justify-center overflow-hidden whitespace-nowrap rounded-full bg-blue-600 text-center text-xs text-white transition duration-500'>
                        25%
                      </div>
                    </div>
                  </div>
                  {/* 明細 */}
                  {isShowCategoryList && (
                    <ul className='list-disc space-y-3 p-3'>
                      <li className='flex items-center'>
                        <div className='flex flex-col'>
                          <span>摩斯</span>
                          <span>6/2</span>
                        </div>
                        <span className='ml-auto'>$-180</span>
                      </li>

                      <li className='flex items-center'>
                        <div className='flex flex-col'>
                          <span>摩斯</span>
                          <span>6/2</span>
                        </div>
                        <span className='ml-auto'>$-180</span>
                      </li>

                      <li className='flex items-center'>
                        <div className='flex flex-col'>
                          <span>摩斯</span>
                          <span>6/2</span>
                        </div>
                        <span className='ml-auto'>$-180</span>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCategoryPage;

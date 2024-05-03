import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import cx from 'classnames';
import { Checkerboard, List, SignOut } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

import { SelectLang } from '@/app/@components/index';

const LayoutPage = () => {
  // 是否顯示 Sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // i18n
  const { t } = useTranslation();

  return (
    <>
      {/* Sidebar */}
      <div
        className={cx(
          'z-60 fixed inset-y-0 start-0 w-64 -translate-x-full overflow-y-auto border-e border-gray-200 bg-white pt-7 transition-all duration-300 lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 lg:pb-10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2',
          {
            'hidden': !isSidebarVisible,
            'block translate-x-0': isSidebarVisible,
          },
        )}>
        <div className='px-6'>
          <a className='flex-none text-xl font-semibold' href='#' aria-label='Brand'>
            Brand
          </a>
        </div>
        <nav className='flex w-full flex-col flex-wrap p-6'>
          <ul className='space-y-1.5'>
            <li>
              <a
                className='flex items-center gap-x-3.5 rounded-lg bg-gray-100 px-2.5 py-2 text-sm text-gray-700 hover:bg-gray-100'
                href='#'>
                <Checkerboard size={24} />
                <span>{t('nav.dashboard')}</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* 下方功能區塊 */}
        <div className='fixed bottom-0 w-full border-t p-4 lg:hidden'>
          <div className='flex justify-center gap-5'>
            <SelectLang />
            <SignOut size={24} className='cursor-pointer' />
          </div>
        </div>
      </div>

      <div className='lg:ml-255 flex h-screen'>
        {/* Header */}
        <header className='lg:w-header z-1 fixed top-0 ml-0 flex h-[66px] w-full items-center justify-between border border-gray-200 p-4 px-6'>
          {/* BreadCrumbs */}
          <div>Dashboard</div>

          {/* Hamburger */}
          <button
            type='button'
            className='h-full rounded-lg border border-gray-200 p-1 text-gray-500 hover:text-gray-600 lg:hidden'
            onClick={() => setIsSidebarVisible(true)}>
            <List size={24} />
          </button>

          {/* 語系切換、登出*/}
          <div className='hidden lg:flex lg:gap-5'>
            <SelectLang />
            <SignOut size={24} className='cursor-pointer' />
          </div>
        </header>

        {/* Content */}
        <div className='mt-[66px] flex-1 p-6'>
          <Outlet />
        </div>
      </div>

      {/* Mask */}
      {isSidebarVisible && (
        <div
          className={cx('fixed inset-0 z-50 bg-gray-900 opacity-50 lg:hidden', {
            'block': isSidebarVisible,
            'hidden': !isSidebarVisible,
          })}
          onClick={() => setIsSidebarVisible(false)}></div>
      )}
    </>
  );
};

export default LayoutPage;

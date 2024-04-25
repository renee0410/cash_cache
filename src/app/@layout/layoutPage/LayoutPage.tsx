import React, { useState } from 'react';
import cx from 'classnames';
import { Checkerboard, List } from '@phosphor-icons/react';

const LayoutPage = () => {
  // 是否顯示 Sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div
        className={cx(
          'z-60 fixed inset-y-0 start-0 w-64 -translate-x-full overflow-y-auto border-e border-gray-200 bg-white pb-10 pt-7 transition-all duration-300 lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2',
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
                Dashboard
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Header */}
      <header className='lg:ml-255 fixed top-0 ml-0 w-full border border-gray-200 p-5'>
        {/* Hamburger */}
        <button
          type='button'
          className='rounded-lg border border-gray-200 p-1 text-gray-500 hover:text-gray-600 lg:hidden'
          onClick={() => setIsSidebarVisible(true)}>
          <List size={24} />
        </button>

        <div className='hidden lg:block'>Header</div>
      </header>

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

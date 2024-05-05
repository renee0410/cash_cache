import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import cx from 'classnames';
import { Checkerboard, List, SignOut, CurrencyCircleDollar, CaretDown } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

import { SelectLang } from '@/app/@components/index';

const LayoutPage = () => {
  // 是否顯示 Sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  // 是否顯示子菜單
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  // 目前路由
  const [currentPath, setCurrentPath] = useState('');

  // i18n
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const menuLists = [
    {
      key: 'dashboard',
      title: t('nav.dashboard'),
      icon: Checkerboard,
      path: '/',
    },
    {
      key: 'expense',
      title: t('nav.expense'),
      icon: CurrencyCircleDollar,
      path: '/expense',
      children: [
        {
          key: 'expenseCategory',
          title: t('nav.category'),
          path: '/expense/category',
        },
        {
          key: 'expenseDetail',
          title: t('nav.detail'),
          path: '/expense/detail',
        },
      ],
    },
  ];

  useEffect(() => {
    const path = location.pathname;
    setCurrentPath(path);
  }, [location]);

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
            {menuLists.map((menu) => {
              const Icon = menu.icon;
              return (
                <li key={menu.key}>
                  <div
                    className={cx('flex cursor-pointer items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-gray-700', {
                      'bg-secondary text-primary': currentPath === menu.path,
                    })}
                    onClick={() => {
                      if (!menu.children) {
                        navigate(menu.path);
                      } else {
                        setIsSubMenuVisible(!isSubMenuVisible);
                      }
                    }}>
                    <Icon size={24} />
                    <span>{menu.title}</span>
                    {menu.children && (
                      <div className={cx('ms-auto', { 'rotate-180 transform': isSubMenuVisible })}>
                        <CaretDown size={16} />
                      </div>
                    )}
                  </div>

                  {/* 子層 */}
                  {menu.children && (
                    <div
                      className={cx('w-full overflow-hidden', {
                        'hidden': !isSubMenuVisible,
                        'block': isSubMenuVisible,
                      })}>
                      <ul>
                        {menu.children.map((child) => {
                          console.log(child);
                          return (
                            <li
                              key={child.key}
                              className={cx(
                                'ml-2 flex cursor-pointer items-center gap-x-3 rounded-lg p-2.5 text-sm before:block before:size-1 before:rounded-full before:bg-gray-700',
                                {
                                  'text-primary bg-secondary before:bg-primary': currentPath === child.path,
                                },
                              )}
                              onClick={() => navigate(child.path)}>
                              {child.title}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
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

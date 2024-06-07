import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { SelectLang } from '@/app/@components/index';
import { Icon } from '@/app/@atoms/index';
import { cn } from '@/app/@utils/index';

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
      icon: 'Checkerboard',
      path: '/',
    },
    {
      key: 'expense',
      title: t('nav.expense'),
      icon: 'CurrencyCircleDollar',
      path: '/expense',
      children: [
        {
          key: 'expenseDetail',
          title: t('nav.detail'),
          path: '/expense/detail',
        },
        {
          key: 'expenseCategory',
          title: t('nav.category'),
          path: '/expense/category',
        },
      ],
    },
    {
      key: 'settings',
      title: t('nav.settings'),
      icon: 'Gear',
      path: '/settings',
    },
  ];

  useEffect(() => {
    const path = location.pathname;
    setCurrentPath(path);
    console.log(path.split('/').slice(1));
  }, [location]);

  return (
    <>
      {/* Sidebar */}
      <div
        className={cn(
          'fixed inset-y-0 start-0 z-200 w-64 -translate-x-full overflow-y-auto border-e border-gray-200 bg-slate-50 pt-7 transition-all duration-300 lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 lg:pb-10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2',
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
              return (
                <li key={menu.key}>
                  <div
                    className={cn('flex cursor-pointer items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-gray-700', {
                      'bg-secondary text-primary': currentPath === menu.path,
                    })}
                    onClick={() => {
                      if (!menu.children) {
                        navigate(menu.path);
                      } else {
                        setIsSubMenuVisible(!isSubMenuVisible);
                      }
                    }}>
                    <Icon iconName={menu.icon} size={24}></Icon>
                    <span>{menu.title}</span>
                    {menu.children && (
                      <div className={cn('ms-auto', { 'rotate-180 transform': isSubMenuVisible })}>
                        <Icon iconName='CaretDown' size={16}></Icon>
                      </div>
                    )}
                  </div>

                  {/* 子層 */}
                  {menu.children && (
                    <div
                      className={cn('w-full overflow-hidden', {
                        'hidden': !isSubMenuVisible,
                        'block': isSubMenuVisible,
                      })}>
                      <ul>
                        {menu.children.map((child) => {
                          // console.log(child);
                          return (
                            <li
                              key={child.key}
                              className={cn(
                                'ml-2 flex cursor-pointer items-center gap-x-3 rounded-lg p-2.5 text-sm before:block before:size-1 before:rounded-full before:bg-gray-700',
                                {
                                  'bg-secondary text-primary before:bg-primary': currentPath === child.path,
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
            <Icon iconName='SignOut' size={24} className='cursor-pointer' />
          </div>
        </div>
      </div>

      <div className='flex h-screen lg:ml-255'>
        {/* Header */}
        <header className='fixed top-0 z-1 ml-0 flex h-[66px] w-full items-center justify-between border border-gray-200 bg-slate-50 p-4 px-6 lg:w-header'>
          {/* BreadCrumbs */}
          <div className=''>
            {currentPath
              .split('/')
              .slice(1)
              .map((path, index) => {
                console.log(path, index);
                return (
                  <span key={index}>
                    {path === '' ? (
                      // 首頁Dashboard
                      <span className='font-bold text-gray-700'>{t('nav.dashboard')}</span>
                    ) : (
                      <span
                        className={cn('text-gray-500', {
                          'font-bold text-gray-700': index === currentPath.split('/').slice(1).length - 1, // 最後一個
                        })}>
                        {t(`nav.${path}`)}
                      </span>
                    )}

                    {index < currentPath.split('/').slice(1).length - 1 && (
                      <span className='mx-3 inline-block text-gray-500'> / </span>
                    )}
                  </span>
                );
              })}
          </div>

          {/* Hamburger */}
          <button
            type='button'
            className='h-full rounded-lg border border-gray-200 p-1 text-gray-500 hover:text-gray-600 lg:hidden'
            onClick={() => setIsSidebarVisible(true)}>
            <Icon iconName='List' size={24} />
          </button>

          {/* 語系切換、登出*/}
          <div className='hidden lg:flex lg:gap-5'>
            <SelectLang />
            <Icon iconName='SignOut' size={24} className='cursor-pointer' />
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
          className={cn('fixed inset-0 z-100 bg-gray-900 opacity-50 lg:hidden', {
            'block': isSidebarVisible,
            'hidden': !isSidebarVisible,
          })}
          onClick={() => setIsSidebarVisible(false)}></div>
      )}
    </>
  );
};

export default LayoutPage;

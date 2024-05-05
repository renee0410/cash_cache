import React from 'react';
import { LayoutPage } from '@/app/@layout/index';
import { LoginPage, DashboardPage, ExpenseCategoryPage, ExpenseDetailPage } from '@/app/@pages/index';

const routes = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      // Dashboard
      { path: '', element: <DashboardPage /> },
      // 支出
      {
        path: 'expense',
        children: [
          {
            path: 'detail',
            element: <ExpenseDetailPage />,
          },
          {
            path: 'category',
            element: <ExpenseCategoryPage />,
          },
        ],
      },
      // 收入
      {
        path: 'income',
        children: [
          {
            path: 'detail',
          },
          {
            path: 'category',
          },
        ],
      },
      // 設定
      { path: 'settings' },
    ],
  },
];

export default routes;

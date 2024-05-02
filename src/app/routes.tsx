import React from 'react';
import { LayoutPage } from '@/app/@layout/index';
import { LoginPage } from '@/app/@pages/index';

const routes = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <LayoutPage />,
  },
];

export default routes;

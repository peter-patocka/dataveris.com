import { FC } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import HomePage from '@/pages/home-page';
import LoginPage from '@/pages/login-page';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '',
        element: <Navigate to="home" />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];

const RenderRouter: FC = () => {
  return useRoutes(routes);
};

export default RenderRouter;

import React from 'react';

import ReactDOM from 'react-dom/client';

import QueryProvider from './provider/query-provider.tsx';
import Routes from './routes/index.tsx';
import { ToasterConfig } from '@/components';

import './css/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*<LayoutConfigProvider>*/}
    <QueryProvider>
      <ToasterConfig />
      <Routes />
    </QueryProvider>
    {/*</LayoutConfigProvider>*/}
  </React.StrictMode>
);

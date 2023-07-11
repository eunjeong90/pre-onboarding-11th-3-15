import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RootRouter } from 'Routers/RootRouter';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={RootRouter} fallbackElement={'Loading...'} />
  </React.StrictMode>,
);

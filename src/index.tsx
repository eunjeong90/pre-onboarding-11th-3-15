import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RootRouter } from 'Routers/RootRouter';
import { HttpClient } from 'Service/httpClient';
import { GitHubAPIs } from 'Service/gitHubService';
import ClientProvider from 'Context/clientContext';
import GlobalStyles from 'Styles/GlobalStyles';
import './index.css';

const BASE_URL = 'https://api.github.com/';
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY as string;
const HttpService = new HttpClient(API_KEY, BASE_URL);
const GitAPIService = new GitHubAPIs(HttpService, 'facebook', 'react');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ClientProvider GitAPIService={GitAPIService}>
      <GlobalStyles />
      <RouterProvider router={RootRouter} fallbackElement={'Loading...'} />
    </ClientProvider>
  </React.StrictMode>,
);

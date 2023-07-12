import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'Components/Common/Header';
import './App.css';

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;

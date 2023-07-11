import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'Components/Header';
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

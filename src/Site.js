import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderSite } from './components/HeaderSite';
import './style.css';

export default function Site() {
  
  return (
    <>
      <HeaderSite />
      {/* Body section */}
      <Outlet />
    </>
  );
}

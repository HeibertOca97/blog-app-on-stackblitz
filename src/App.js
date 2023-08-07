import React, { useRef, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

export default function App() {
  return (
    <>
      <h1>Layout App</h1>
      <header>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/auth/dashboard">Dashboard</Link>
        </p>
        <p>
          <Link to="/nofound">Page no found</Link>
        </p>
      </header>
      {/* Body section */}
      <Outlet />
    </>
  );
}

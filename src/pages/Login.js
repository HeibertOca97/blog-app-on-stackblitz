import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/auth/dashboard">Dashboard</Link>
      </p>
      <p>
        <Link to="/nofound">Page no found</Link>
      </p>
    </>
  );
}

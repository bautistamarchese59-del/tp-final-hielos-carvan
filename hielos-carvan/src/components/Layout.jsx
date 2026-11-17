import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ carritoCount }) {
  return (
    <div className="app-layout">
      <Navbar carritoCount={carritoCount} />
      
      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
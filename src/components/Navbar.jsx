import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar({ carrito = [] }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <header className="navbar-header">
      {/* Topbar de info */}
      <div className="navbar-topbar">
        <div className="container topbar-container">
          <div className="topbar-info">
            <span>Lun a Sáb: 8:00 - 19:00 hs</span>
            <span className="topbar-divider">•</span>
            <a href="tel:1150521870" className="topbar-link">
              11-5052-1870
            </a>
          </div>

          <div className="topbar-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* nav principal */}
      <nav className="navbar-main">
        <div className="container nav-container">
          <Link to="/" className="brand-logo-link" onClick={() => setMenuAbierto(false)}>
            <img src="/carvan.png" alt="Hielos Carvan" className="brand-logo-img" />
            <span className="brand-name">
              HIELOS <span className="brand-highlight">CARVAN</span>
            </span>
          </Link>

          <ul className={`nav-menu ${menuAbierto ? 'abierto' : ''}`}>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setMenuAbierto(false)}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/productos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setMenuAbierto(false)}>
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink to="/galeria" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setMenuAbierto(false)}>
                Galería
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setMenuAbierto(false)}>
                Contacto
              </NavLink>
            </li>
          </ul>

          <div className="nav-actions">
            <Link to="/contacto" className="cart-badge-link" title="Ver pedido">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {totalUnidades > 0 && <span className="cart-count-badge">{totalUnidades}</span>}
            </Link>

            <button className="menu-toggle-btn" onClick={() => setMenuAbierto(!menuAbierto)}>
              {menuAbierto ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
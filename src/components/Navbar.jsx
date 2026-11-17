import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar({ carrito = [] }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <header className="navbar-header">
      {/* Topbar simplificada (solo horarios y teléfono) */}
      <div className="navbar-topbar">
        <div className="container topbar-container">
          <div className="topbar-info" style={{ margin: '0 auto' }}>
            <span>Lun a dom: 8:00 - 23:00 hs  ◦ envío a coordinar</span>
            <span className="topbar-divider">•</span>
            <a href="tel:1167391181" className="topbar-link">
              11-6739-1181
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
              <NavLink to="/calculadora" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setMenuAbierto(false)}>
                Calculadora
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
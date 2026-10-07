import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background-overlay"></div>
      
      <div className="container hero-container">
        
        <div className="hero-glass-card">
          
          <div className="hero-badge">
            <span className="badge-dot"></span>
            FABRICACIÓN Y REPARTO DIRECTO · BUENOS AIRES
          </div>

          <h1 className="hero-title">
            Hielo en bolsas y barras <br />
            <span className="hero-title-gradient">listo para tu comercio o evento</span>
          </h1>

          <p className="hero-subtitle">
            Arrancamos este proyecto a principios de 2026 con un objetivo claro: fabricar hielo transparente, macizo y que no se pegue. Filtrado con ozono e iones de plata para que tus tragos y conservadoras rindan al máximo.
          </p>

          <div className="hero-actions">
            <Link to="/productos" className="btn-hero-primary">
              Ver bolsas y precios
            </Link>
            <Link to="/contacto" className="btn-hero-secondary">
              Pedir por WhatsApp →
            </Link>
          </div>

          {/* Datos concretos del servicio */}
          <div className="hero-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🧊</span>
              <div>
                <strong>Cubos Sólidos</strong>
                <small>Fusión lenta para coctelería</small>
              </div>
            </div>

            <div className="highlight-divider"></div>

            <div className="highlight-item">
              <span className="highlight-icon">🚚</span>
              <div>
                <strong>Entregas Programadas</strong>
                <small>Bares, boliches y reuniones</small>
              </div>
            </div>

            <div className="highlight-divider"></div>

            <div className="highlight-item">
              <span className="highlight-icon">📍</span>
              <div>
                <strong>Cobertura Local</strong>
                <small>Envíos diarios coordinados</small>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
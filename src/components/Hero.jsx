import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  // Número de WhatsApp con código de país (Argentina: 549 + 1167391181)
  const telefonoWhatsApp = "5491167391181";
  const mensajePredeterminado = encodeURIComponent(
    "¡Hola Hielos Carvan! Quisiera consultar precios y disponibilidad para hacer un pedido de bolsas de hielo."
  );
  const urlWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${mensajePredeterminado}`;

  return (
    <section className="hero-section">
      <div className="hero-wrapper">
       
        {/* Bolsa lateral izquierda */}
        <div className="hero-bag hero-bag--left">
          <img src="/hielo 10kg.png" alt="Hielo Carvan 3kg" />
        </div>

        {/* Tarjeta Central Principal */}
        <div className="hero-card">
         
          <div className="hero-badge">
            <span className="badge-dot"></span>
            FABRICACIÓN Y REPARTO DIRECTO - ZONA SUR
          </div>

          <h1 className="hero-title">
            HIELO EN CUBOS<br />
            <span className="hero-title-cyan">LISTO PARA TU COMERCIO O EVENTO</span>
          </h1>

          <p className="hero-description">
            Ideal para eventos, comercios y hogares. Calidad constante, bolsas prácticas y listas para usar.
          </p>

          <div className="hero-actions">
            <button onClick={() => navigate('/productos')} className="btn-cyan">
              Ver bolsas y precios
            </button>
            <a
              href={urlWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark-outline"
            >
              Pedir por WhatsApp →
            </a>
          </div>

          {/* Las 3 características rápidas dentro del Hero */}
          <div className="hero-features">
           
            <div className="feature-item">
              <span className="feature-emoji">🧊</span>
              <div className="feature-info">
                <strong>Cubos Sólidos</strong>
                <p>Fusión lenta para coctelería</p>
              </div>
            </div>

            <div className="feature-divider"></div>

            <div className="feature-item">
              <span className="feature-emoji">🚚</span>
              <div className="feature-info">
                <strong>Entregas Programadas</strong>
                <p>Bares, boliches y reuniones</p>
              </div>
            </div>

            <div className="feature-divider"></div>

            <div className="feature-item">
              <span className="feature-emoji">📍</span>
              <div className="feature-info">
                <strong>Cobertura Local</strong>
                <p>Envíos diarios coordinados</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bolsa lateral derecha */}
        <div className="hero-bag hero-bag--right">
          <img src="/hielo 10kg.png" alt="Hielo Carvan 10kg" />
        </div>

      </div>
    </section>
  );
}
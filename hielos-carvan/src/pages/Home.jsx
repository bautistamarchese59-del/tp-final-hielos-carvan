import React from 'react';
import Hero from '../components/Hero';
import '../styles/Home.css';

export default function Home() {
  return (
    <main className="home-page">
      {/* Sección Hero principal con cuadro y bolsas laterales */}
      <Hero />

      {/* Sección "Sobre nosotros" / Características de la empresa */}
      <section className="sobre-section">
        <div className="container sobre-layout">
         
          {/* Encabezado centrado */}
          <div className="sobre-header-center">
            <span className="section-label">¿POR QUÉ ELEGIR HIELOS CARVAN?</span>
            <h2>SERVICIO DE HIELO PENSADO PARA QUE NO TE QUEDES SIN STOCK</h2>
          </div>

          {/* Grid de Tarjetas de características */}
          <div className="sobre-grid-features">
           
            <div className="feature-card">
              <div className="feature-number">01</div>
              <div className="feature-content">
                <h4>Sin Bloques Apelmazados</h4>
                <p>Cuidamos el congelado y la cadena de frío para que el hielo llegue totalmente suelto y listo para servir.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-number">02</div>
              <div className="feature-content">
                <h4>Agua Purificada sin Sabor</h4>
                <p>Proceso de filtración con ozono que garantiza un hielo cristalino y neutro, sin alterar el gusto de las bebidas.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-number">03</div>
              <div className="feature-content">
                <h4>Trato Directo con el Dueño</h4>
                <p>Sin intermediarios ni contestadores automáticos: coordinamos stock, entregas y presupuestos directamente por WhatsApp.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-number">04</div>
              <div className="feature-content">
                <h4>Formatos y Stock a Medida</h4>
                <p>Presentaciones en bolsas de 3kg, 10kg y 15kg ideales para eventos, boliches, gastronomía, kioscos y particulares.</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
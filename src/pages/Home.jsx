import React from 'react';
import Hero from '../components/Hero';
import '../styles/Home.css';

export default function Home() {
  return (
    <main className="home-page">
      <Hero />

      <section className="sobre-section">
        <div className="container sobre-layout">
          
          <div className="sobre-col-main">
            <span className="section-label">Quiénes Somos</span>
            <h2>Servicio de hielo pensado para que no te quedes sin stock</h2>
            <p>
              Hielos Carvan nació a comienzos de 2026 como una fábrica familiar. Sabemos lo frustrante que es recibir bolsas con agua acumulada o bloques apelmazados, por lo que nos enfocamos en cuidar cada etapa del congelado y embolsado.
            </p>
            <p>
              Atendemos de forma directa a organizadores de eventos, gastronómicos, kioscos y particulares. No usamos intermediarios: producimos, embolsamos y coordinamos el despacho directamente con vos.
            </p>
          </div>

          <div className="sobre-col-features">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <div>
                <h4>Agua Purificada sin Sabor</h4>
                <p>Filtración con ozono que mantiene el hielo neutro para no alterar el gusto de las bebidas.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-number">02</div>
              <div>
                <h4>Trato Directo con el Dueño</h4>
                <p>Sin contestadores automáticos: coordinamos horarios y cantidades directo por teléfono o WhatsApp.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-number">03</div>
              <div>
                <h4>Formatos a Medida</h4>
                <p>Bolsas de 4kg y 10kg para eventos, o hielo en escamas y barras para enfriamiento industrial.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
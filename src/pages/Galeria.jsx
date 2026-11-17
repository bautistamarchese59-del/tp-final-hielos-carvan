import React from 'react';
import '../styles/Galeria.css';

const FOTOS_GALERIA = [
  { 
    id: 1, 
    url: "/bolsas galeria one.png", 
    titulo: "Stock y Reparto Directo en Zona Sur" 
  },
  { 
    id: 2, 
    url: "/bolsas galeria two.png", 
    titulo: "Listos para la entrega y distribución" 
  }
];

export default function Galeria() {
  return (
    <main className="galeria-page">
      <div className="container">
        
        {/* Encabezado de la Sección */}
        <section className="galeria-hero">
          <span className="galeria-hero__badge">📸 Momentos Carvan</span>
          <h1>
            GALERÍA DE <span className="title-cyan">IMÁGENES</span>
          </h1>
          <p>
            Un vistazo a nuestros productos, la calidad del hielo en cubos y las entregas diarias en Zona Sur.
          </p>
        </section>

        {/* Grilla de Fotos */}
        <div className="galeria-grid">
          {FOTOS_GALERIA.map((foto) => (
            <div key={foto.id} className="galeria-card">
              <div className="galeria-img-wrapper">
                <img src={foto.url} alt={foto.titulo} />
              </div>
              <div className="galeria-info">
                <h3>{foto.titulo}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
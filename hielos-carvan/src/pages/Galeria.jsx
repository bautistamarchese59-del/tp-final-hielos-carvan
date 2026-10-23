import React, { useState } from 'react';
import '../styles/Galeria.css';

const GALERIA_DATA = [
  {
    id: 1,
    titulo: 'Bolsas de Hielo Rolito',
    categoria: 'rolito',
    categoriaTag: 'ROLITO',
    descripcion: 'Hielo purificado en bolsas individuales de 4kg y 10kg.',
    imagen: '/productosrolo10k.png'
  },
  {
    id: 2,
    titulo: 'Hielo Cristalino en Cubos',
    categoria: 'rolito',
    categoriaTag: 'ROLITO',
    descripcion: 'Cubos macizos de fusión lenta ideales para tragos y eventos.',
    imagen: '/productoscubogrande.png'
  },
  {
    id: 3,
    titulo: 'Escamas de Hielo Puro',
    categoria: 'escamas',
    categoriaTag: 'ESCAMAS',
    descripcion: 'Enfriamiento rápido de contacto para conservación y barras.',
    imagen: '/productosescamas20k.png'
  },
  {
    id: 4,
    titulo: 'Hielo Molido Seleccionado',
    categoria: 'escamas',
    categoriaTag: 'MOLIDO',
    descripcion: 'Textura perfecta para coctelería frappe y exhibición.',
    imagen: '/productosmolido10k.png'
  },
  {
    id: 5,
    titulo: 'Barras de Hielo de Alta Densidad',
    categoria: 'barras',
    categoriaTag: 'BARRAS',
    descripcion: 'Bloques de 15kg para conservación térmica prolongada.',
    imagen: '/productosbarra-15k.png'
  },
  {
    id: 6,
    titulo: 'Distribución y Stock Permanente',
    categoria: 'rolito',
    categoriaTag: 'ROLITO',
    descripcion: 'Proceso de fabricación con agua ozonizada e iones de plata.',
    imagen: '/productosrolo4k.png'
  }
];

export default function Galeria() {
  const [tabActiva, setTabActiva] = useState('todos');
  const [imagenModal, setImagenModal] = useState(null);

  const itemsFiltrados = tabActiva === 'todos'
    ? GALERIA_DATA
    : GALERIA_DATA.filter((item) => item.categoria === tabActiva);

  const getBannerInfo = () => {
    switch (tabActiva) {
      case 'rolito':
        return {
          titulo: 'HIELO ROLO Y CUBOS',
          subtitulo: 'Cubos sólidos y transparentes fabricados con agua 100% filtrada.'
        };
      case 'escamas':
        return {
          titulo: 'HIELO EN ESCAMAS Y MOLIDO',
          subtitulo: 'Máxima superficie de contacto para un enfriamiento inmediato.'
        };
      case 'barras':
        return {
          titulo: 'BARRAS DE HIELO',
          subtitulo: 'Bloques de larga duración térmica para uso comercial e industrial.'
        };
      default:
        return {
          titulo: 'TODOS LOS HIELOS',
          subtitulo: 'Conocé toda nuestra variedad de productos congelados de alta pureza.'
        };
    }
  };

  const bannerInfo = getBannerInfo();

  return (
    <main className="galeria-page">
      <div className="container galeria-container">

        {/* Pestañas de Filtrado Superior */}
        <div className="galeria-tabs">
          <button
            className={`tab-btn ${tabActiva === 'todos' ? 'active' : ''}`}
            onClick={() => setTabActiva('todos')}
          >
            TODOS LOS HIELOS
          </button>
          <button
            className={`tab-btn ${tabActiva === 'rolito' ? 'active' : ''}`}
            onClick={() => setTabActiva('rolito')}
          >
            HIELO ROLOS / ROLITO
          </button>
          <button
            className={`tab-btn ${tabActiva === 'escamas' ? 'active' : ''}`}
            onClick={() => setTabActiva('escamas')}
          >
            HIELO EN ESCAMAS
          </button>
          <button
            className={`tab-btn ${tabActiva === 'barras' ? 'active' : ''}`}
            onClick={() => setTabActiva('barras')}
          >
            BARRAS DE HIELO
          </button>
        </div>

        {/* Banner Cartel */}
        <div className="galeria-banner">
          <h3>{bannerInfo.titulo}</h3>
          <p>{bannerInfo.subtitulo}</p>
        </div>

        {/* Grilla de Imágenes */}
        <div className="galeria-grid">
          {itemsFiltrados.map((item) => (
            <div
              key={item.id}
              className="galeria-card"
              onClick={() => setImagenModal(item)}
            >
              <div className="galeria-img-wrapper">
                <img src={item.imagen} alt={item.titulo} />
                <span className="galeria-tag">{item.categoriaTag}</span>
                <div className="galeria-overlay-zoom">
                  <span>🔍 Ver más</span>
                </div>
              </div>

              <div className="galeria-card__info">
                <span>{item.categoriaTag}</span>
                <h4>{item.titulo}</h4>
                <p>{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox */}
        {imagenModal && (
          <div className="lightbox-overlay" onClick={() => setImagenModal(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="lightbox-close"
                onClick={() => setImagenModal(null)}
              >
                ✕
              </button>
              <img src={imagenModal.imagen} alt={imagenModal.titulo} />
              <div className="lightbox-info">
                <h3>{imagenModal.titulo}</h3>
                <p>{imagenModal.descripcion}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
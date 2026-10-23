import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Productos.css';

const LISTA_PRODUCTOS = [
  {
    id: "1",
    nombre: "Hielo en Cubos X 3 Kilos",
    categoria: "3kg",
    pesoValor: 3,
    pesoUnidad: "Kilos",
    descripcion: "Ideal para eventos hogareños, conservadoras y reuniones pequeñas.",
    imagen: "/hielo 3kg.png"
  },
  {
    id: "2",
    nombre: "Hielo en Cubos X 10 Kilos",
    categoria: "10kg",
    pesoValor: 10,
    pesoUnidad: "Kilos",
    descripcion: "Formato rindiendo pensado para comercios, kioscos y gastronómicos.",
    imagen: "/hielo 10kg.png"
  },
  {
    id: "3",
    nombre: "Hielo en Cubos X 15 Kilos",
    categoria: "15kg",
    pesoValor: 15,
    pesoUnidad: "Kilos",
    descripcion: "Bolsa de gran volumen para eventos masivos y distribuidores.",
    imagen: "/hielo-15kg.png"
  }
];

export default function Productos({ carrito = [], agregarAlCarrito, quitarDelCarrito }) {
  const navigate = useNavigate();

  const totalBolsas = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const handleIrAlContacto = () => {
    navigate('/contacto');
  };

  return (
    <main className="productos-page">
      <div className="container">

        {/* Hero explicativo */}
        <section className="productos-hero">
          <span className="productos-hero__badge">Venta Minorista y Mayorista</span>
          <h1>NOS ADAPTAMOS A TU PRESUPUESTO</h1>
          <p>
            Armamos presupuestos a medida según la cantidad de bolsas que necesites.
            ¡Consultanos por descuentos especiales para eventos y comercios!
          </p>
        </section>

        {/* Grilla de Productos */}
        <section className="productos-grid">
          {LISTA_PRODUCTOS.map((prod) => {
            const enCarrito = carrito.find((item) => String(item.id) === String(prod.id));
            const cantidad = enCarrito ? enCarrito.cantidad : 0;

            return (
              <div key={prod.id} className="producto-card">
                <div className="card-img-wrapper">
                  <img src={prod.imagen} alt={prod.nombre} />
                  <div className="weight-badge">
                    <span className="weight-badge__val">{prod.pesoValor}</span>
                    <span className="weight-badge__unit">{prod.pesoUnidad}</span>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{prod.nombre}</h3>
                  <p className="card-desc">{prod.descripcion}</p>
                  
                  <div className="badge-precio-adaptable">
                    🏷️ Precio mayorista 4 bolsas o mas 
                  </div>

                  {cantidad === 0 ? (
                    <button
                      onClick={() => agregarAlCarrito(prod)}
                      className="btn-add-cart"
                    >
                      AGREGAR A MI PEDIDO
                    </button>
                  ) : (
                    <div className="cart-controls">
                      <button onClick={() => quitarDelCarrito(prod.id)}>-</button>
                      <span>{cantidad} bolsas en pedido</span>
                      <button onClick={() => agregarAlCarrito(prod)}>+</button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </section>

        {/* Barra Flotante Inferior de Cotización */}
        {totalBolsas > 0 && (
          <div className="floating-cart-bar">
            <div className="cart-summary-info">
              <div>🛒 Pedido: <strong>{totalBolsas}</strong> {totalBolsas === 1 ? 'bolsa seleccionada' : 'bolsas seleccionadas'}</div>
              <small style={{ color: '#94a3b8' }}>Solicitá presupuesto directo por esta cantidad</small>
            </div>
            <button onClick={handleIrAlContacto} className="btn-ir-formulario">
              SOLICITAR PRESUPUESTO →
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
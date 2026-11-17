import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Productos.css';

export default function Productos({ carrito, agregarAlCarrito, quitarDelCarrito }) {
  const navigate = useNavigate();

  // Definición de los productos con su peso en kg para la cuenta
  const listaProductos = [
    {
      id: '3kg',
      nombre: 'HIELO EN CUBOS X 3 KILOS',
      pesoKg: 3,
      descripcion: 'Ideal para eventos hogareños, conservadoras y reuniones pequeñas.',
      imagen: '/hielo 3kg.png',
      badge: null
    },
    {
      id: '10kg',
      nombre: 'HIELO EN CUBOS X 10 KILOS',
      pesoKg: 10,
      descripcion: 'Formato rendidor pensado para comercios, kioscos y gastronómicos.',
      imagen: '/hielo 10kg.png',
      badge: '★ MÁS ELEGIDA'
    }
  ];

  // Buscar la cantidad actual de cada producto en el carrito
  const getCantidad = (id) => {
    const item = carrito.find((prod) => String(prod.id) === String(id));
    return item ? item.cantidad : 0;
  };

  // Cálculo total de kilos y bolsas en el carrito
  const totalBolsas = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  
  const totalKilos = carrito.reduce((acc, item) => {
    const productoBase = listaProductos.find((p) => String(p.id) === String(item.id));
    const peso = productoBase ? productoBase.pesoKg : 0;
    return acc + (peso * item.cantidad);
  }, 0);

  return (
    <main className="productos-page">
      <div className="container">
        
        {/* Encabezado */}
        <section className="productos-hero">
          <span className="productos-hero__badge">⚡ VENTA MINORISTA Y MAYORISTA</span>
          <h1>
            NOS ADAPTAMOS A TU <span className="title-cyan">PRESUPUESTO</span>
          </h1>
          <p>
            Armamos presupuestos a medida según la cantidad de bolsas que necesites.<br />
            ¡Consultanos por descuentos especiales para eventos y comercios!
          </p>
        </section>

        {/* Grilla de Productos */}
        <div className="productos-grid">
          {listaProductos.map((prod) => {
            const cantidad = getCantidad(prod.id);

            return (
              <div key={prod.id} className="producto-card">
                
                <div className="card-img-wrapper">
                  {prod.badge && <span className="card-badge-top">{prod.badge}</span>}
                  <span className="weight-badge">{prod.pesoKg} Kilos</span>
                  <img src={prod.imagen} alt={prod.nombre} />
                </div>

                <div className="card-body">
                  <h3>{prod.nombre}</h3>
                  <p>{prod.descripcion}</p>

                  <div className="mayorista-tag">
                    <span>🏷️</span> Precio mayorista 4 bolsas o más
                  </div>

                  {/* Controles de Cantidad */}
                  {cantidad === 0 ? (
                    <button 
                      onClick={() => agregarAlCarrito(prod)} 
                      className="btn-cyan-full"
                    >
                      AGREGAR A MI PEDIDO
                    </button>
                  ) : (
                    <div className="counter-controls">
                      <button 
                        onClick={() => quitarDelCarrito(prod.id)} 
                        className="counter-btn"
                      >
                        -
                      </button>
                      <span className="counter-text">{cantidad} {cantidad === 1 ? 'bolsa' : 'bolsas'} en pedido</span>
                      <button 
                        onClick={() => agregarAlCarrito(prod)} 
                        className="counter-btn"
                      >
                        +
                      </button>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* Barra de Recuento Flotante de Kilos y Bolsas */}
        {totalBolsas > 0 && (
          <div className="pedido-summary-bar">
            <div className="summary-info">
              <span className="summary-icon">🧊</span>
              <div>
                <strong>Pedido: {totalBolsas} {totalBolsas === 1 ? 'bolsa seleccionada' : 'bolsas seleccionadas'} ({totalKilos} kg en total)</strong>
                <p>Solicitá presupuesto directo por esta cantidad</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/contacto')} 
              className="btn-summary-action"
            >
              SOLICITAR PRESUPUESTO →
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
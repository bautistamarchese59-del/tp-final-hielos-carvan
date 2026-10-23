import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Productos.css';

const LISTA_PRODUCTOS = [
  {
    id: "1",
    nombre: "Hielo Rolo X 4 Kilos",
    categoria: "rolo",
    pesoValor: 4,
    pesoUnidad: "Kilos",
    precioNumerico: 2500,
    estrellas: 5,
    imagen: "/productosrolo4k.png"
  },
  {
    id: "2",
    nombre: "Hielo Molido X 10 Kilos",
    categoria: "molido",
    pesoValor: 10,
    pesoUnidad: "Kilos",
    precioNumerico: 4800,
    estrellas: 5,
    imagen: "/productosmolido10k.png"
  },
  {
    id: "3",
    nombre: "Hielo en Barra X 15 Kilos",
    categoria: "barra",
    pesoValor: 15,
    pesoUnidad: "Kilos",
    precioNumerico: 7000,
    estrellas: 4,
    imagen: "/productosbarra-15k.png"
  },
  {
    id: "4",
    nombre: "Hielo Rolo X 10 Kilos",
    categoria: "rolo",
    pesoValor: 10,
    pesoUnidad: "Kilos",
    precioNumerico: 5500,
    estrellas: 5,
    imagen: "/productosrolo10k.png"
  },
  {
    id: "5",
    nombre: "Hielo Gourmet Cubo Grande X 5 Kilos",
    categoria: "gourmet",
    pesoValor: 5,
    pesoUnidad: "Kilos",
    precioNumerico: 3800,
    estrellas: 5,
    imagen: "/productoscubogrande.png"
  },
  {
    id: "6",
    nombre: "Hielo en Escamas X 20 Kilos",
    categoria: "escamas",
    pesoValor: 20,
    pesoUnidad: "Kilos",
    precioNumerico: 8500,
    estrellas: 4,
    imagen: "/productosescamas20k.png"
  }
];

export default function Productos({ carrito = [], agregarAlCarrito, quitarDelCarrito }) {
  const navigate = useNavigate();
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  const formatMoneda = (val) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(val);
  };

  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalDinero = carrito.reduce((acc, item) => acc + (item.precioNumerico * item.cantidad), 0);

  const handleIrAlContacto = () => {
    navigate('/contacto');
  };

  const productosFiltrados = categoriaActiva === 'todos'
    ? LISTA_PRODUCTOS
    : LISTA_PRODUCTOS.filter((p) => p.categoria === categoriaActiva);

  return (
    <main className="productos-page">
      <div className="container">

        {/* Banner Superior */}
        <section className="productos-hero">
          <span className="productos-hero__badge">Venta de hielo a domicilio y comercios</span>
          <h1>MÁXIMA CALIDAD Y PUREZA GARANTIZADA</h1>
          <p>
            La pureza de nuestros hielos está dada por un tratamiento de
            <strong> Agua Ozonizada y con Iones de Plata</strong>.
          </p>

          {/* Filtros por Categoría */}
          <div className="filtros-container">
            <button
              className={`filtro-btn ${categoriaActiva === 'todos' ? 'activo' : ''}`}
              onClick={() => setCategoriaActiva('todos')}
            >
              Todos
            </button>
            <button
              className={`filtro-btn ${categoriaActiva === 'rolo' ? 'activo' : ''}`}
              onClick={() => setCategoriaActiva('rolo')}
            >
              Rolo
            </button>
            <button
              className={`filtro-btn ${categoriaActiva === 'gourmet' ? 'activo' : ''}`}
              onClick={() => setCategoriaActiva('gourmet')}
            >
              Gourmet
            </button>
            <button
              className={`filtro-btn ${categoriaActiva === 'barra' ? 'activo' : ''}`}
              onClick={() => setCategoriaActiva('barra')}
            >
              Barras
            </button>
            <button
              className={`filtro-btn ${categoriaActiva === 'molido' ? 'activo' : ''}`}
              onClick={() => setCategoriaActiva('molido')}
            >
              Molido
            </button>
            <button
              className={`filtro-btn ${categoriaActiva === 'escamas' ? 'activo' : ''}`}
              onClick={() => setCategoriaActiva('escamas')}
            >
              Escamas
            </button>
          </div>
        </section>

        {/* Grilla de Productos */}
        <section className="productos-grid">
          {productosFiltrados.map((prod) => {
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
                  <div className="card-stars">{'★'.repeat(prod.estrellas || 5)}</div>
                  <div className="card-price">{formatMoneda(prod.precioNumerico)}</div>

                  {cantidad === 0 ? (
                    <button
                      onClick={() => agregarAlCarrito(prod)}
                      className="btn-add-cart"
                    >
                      AÑADIR AL CARRITO
                    </button>
                  ) : (
                    <div className="cart-controls">
                      <button onClick={() => quitarDelCarrito(prod.id)}>-</button>
                      <span>{cantidad} en carrito</span>
                      <button onClick={() => agregarAlCarrito(prod)}>+</button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </section>

        {/* Barra Flotante Inferior de Pedido */}
        {totalUnidades > 0 && (
          <div className="floating-cart-bar">
            <div className="cart-summary-info">
              <div>🛒 <strong>{totalUnidades}</strong> {totalUnidades === 1 ? 'producto' : 'productos'}</div>
              <div className="cart-total-price">Total: <span>{formatMoneda(totalDinero)}</span></div>
            </div>
            <button onClick={handleIrAlContacto} className="btn-ir-formulario">
              FINALIZAR PEDIDO →
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
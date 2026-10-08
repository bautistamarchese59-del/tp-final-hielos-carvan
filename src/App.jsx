// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';

export default function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => String(item.id) === String(producto.id));
      if (existe) {
        return prev.map((item) =>
          String(item.id) === String(producto.id)
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  // Disminuye la cantidad de a 1 (para los botones - y +)
  const quitarDelCarrito = (id) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => String(item.id) === String(id));
      if (existe && existe.cantidad === 1) {
        return prev.filter((item) => String(item.id) !== String(id));
      }
      return prev.map((item) =>
        String(item.id) === String(id)
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      );
    });
  };

  // Elimina completamente el producto del carrito (para el botón X)
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => String(item.id) !== String(id)));
  };

  // Vacía todo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Routes>
      <Route path="/" element={<Layout carritoCount={totalUnidades} />}>
        <Route index element={<Home />} />
        
        {/* Pasamos props a Productos */}
        <Route 
          path="productos" 
          element={
            <Productos 
              carrito={carrito} 
              agregarAlCarrito={agregarAlCarrito} 
              quitarDelCarrito={quitarDelCarrito} 
            />
          } 
        />
        
        <Route path="galeria" element={<Galeria />} />
        
        {/* Pasamos eliminarDelCarrito y vaciarCarrito a Contacto */}
        <Route 
          path="contacto" 
          element={
            <Contacto 
              carrito={carrito} 
              eliminarDelCarrito={eliminarDelCarrito}
              vaciarCarrito={vaciarCarrito} 
            />
          } 
        />
      </Route>
    </Routes>
  );
}
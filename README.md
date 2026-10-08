#  Hielos Carvan - Trabajo Práctico Final (React)

Proyecto final desarrollado para la Diplomatura en Programación Web Full Stack

## 🚀 Demo en Vivo
- [Sitio Web Desplegado en Vercel](https://tp-final-hielos-carvan.vercel.app)

---

## 📋 Descripción del Proyecto
**Hielos Carvan** es una aplicación web e-commerce orientada a la venta y distribución de hielo a domicilio y comercios. Permite explorar productos por categorías, ver detalles y precios, gestionar un carrito de compras dinámico y enviar pedidos directamente por WhatsApp junto con el registro en una base de datos (MockAPI).

---

## ✨ Funcionalidades Principales
- **Catálogo de Productos y Filtros:** Navegación dinámica por categorías (Rolo, Gourmet, Barras, Molido, Escamas).
- **Galería Interactiva:** Modal/Lightbox para previsualizar imágenes en detalle.
- **Carrito de Compras:**
  - Agregar/quitar unidades.
  - Eliminar productos específicos.
  - Vaciar pedido completo.
  - Barra flotante con resumen de total acumulado.
- **Checkout y Contacto:**
  - Formulario de datos de entrega.
  - Integración con **WhatsApp API** para envío automático del resumen del pedido.
  - Registro de pedidos mediante llamadas asincrónicas `fetch` (POST) a **MockAPI**.
- **Diseño Responsive:** Layout adaptado a dispositivos móviles y desktop.

---

## 🛠️ Tecnologías Utilizadas
- **React 18** + **Vite**
- **React Router DOM v6** (Navegación SPA)
- **CSS3 / Flexbox / Grid**
- **MockAPI** (Persistencia y base de datos simulada)
- **Vercel** (Despliegue y hosting continuo)

---

## 📁 Estructura del Proyecto

```text
src/
 ├── assets/        # Recursos gráficos
 ├── components/    # Componentes reutilizables (Navbar, Footer, Layout, etc.)
 ├── pages/         # Páginas principales (Home, Productos, Galería, Contacto)
 ├── styles/        # Hojas de estilo CSS organizadas por componente/página
 ├── App.jsx        # Configuración de rutas principales
 └── main.jsx       # Punto de entrada de la aplicación en React



---

# Instalación y Configuración Local

```
bash
git clone https://github.com/bautistamarchese59-del/tp-final-hielos-carvan.git
```

Navegar al directorio del proyecto:
```bash
cd tp-final-hielos-carvan
```
Instalar dependencias:
```bash
npm install
```

Iniciar el servidor de desarrollo:
```bash
npm run dev
```

Abrir en el navegador: 
Visitá http://localhost:5173 para ver la aplicación.


<h1>🧊 Hielos Carvan - Trabajo Práctico Final (React)</h1>

<p>Proyecto final desarrollado para la <strong>Diplomatura en Programación Web Full Stack (UTN FRBA)</strong>.</p>

<hr>

<h2>🚀 Demo en Vivo</h2>
<p>
  👉 <a href="https://tp-final-hielos-carvan.vercel.app" target="_blank">Sitio Web Desplegado en Vercel</a>
</p>

<hr>

<h2>📋 Descripción del Proyecto</h2>
<p>
  <strong>Hielos Carvan</strong> es una aplicación web e-commerce orientada a la venta y distribución de hielo a domicilio y comercios. Permite explorar productos por categorías, ver detalles y precios, gestionar un carrito de compras dinámico y enviar pedidos directamente por WhatsApp junto con el registro en una base de datos (MockAPI).
</p>

<hr>

<h2>✨ Funcionalidades Principales</h2>
<ul>
  <li><strong>Catálogo de Productos y Filtros:</strong> Navegación dinámica por categorías (Rolo, Gourmet, Barras, Molido, Escamas).</li>
  <li><strong>Galería Interactiva:</strong> Modal/Lightbox para previsualizar imágenes en detalle.</li>
  <li>
    <strong>Carrito de Compras:</strong>
    <ul>
      <li>Agregar / quitar unidades.</li>
      <li>Eliminar productos específicos.</li>
      <li>Vaciar pedido completo.</li>
      <li>Barra flotante con resumen de total acumulado.</li>
    </ul>
  </li>
  <li>
    <strong>Checkout y Contacto:</strong>
    <ul>
      <li>Formulario de datos de entrega.</li>
      <li>Integración con <strong>WhatsApp API</strong> para envío automático del resumen del pedido.</li>
      <li>Registro de pedidos mediante llamadas asincrónicas <code>fetch</code> (POST) a <strong>MockAPI</strong>.</li>
    </ul>
  </li>
  <li><strong>Diseño Responsive:</strong> Layout adaptado a dispositivos móviles y desktop.</li>
</ul>

<hr>

<h2>🛠️ Tecnologías Utilizadas</h2>
<ul>
  <li><strong>React 18</strong> + <strong>Vite</strong></li>
  <li><strong>React Router DOM v6</strong> (Navegación SPA)</li>
  <li><strong>CSS3 / Flexbox / Grid</strong></li>
  <li><strong>MockAPI</strong> (Persistencia y base de datos simulada)</li>
  <li><strong>Vercel</strong> (Despliegue y hosting continuo)</li>
</ul>

<hr>

<h2>📁 Estructura del Proyecto</h2>

<pre><code>src/
 ├── assets/        # Recursos gráficos
 ├── components/    # Componentes reutilizables (Navbar, Footer, Layout, etc.)
 ├── pages/         # Páginas principales (Home, Productos, Galería, Contacto)
 ├── styles/        # Hojas de estilo CSS organizadas por componente/página
 ├── App.jsx        # Configuración de rutas principales
 └── main.jsx       # Punto de entrada de la aplicación en React</code></pre>

<hr>

<h2>💻 Instalación y Configuración Local</h2>

<p>Para ejecutar este proyecto localmente en tu máquina, seguí estos pasos:</p>

<ol>
  <li>
    <strong>Clonar el repositorio:</strong>
    <pre><code>git clone https://github.com/bautistamarchese59-del/tp-final-hielos-carvan.git</code></pre>
  </li>
  <li>
    <strong>Navegar al directorio del proyecto:</strong>
    <pre><code>cd tp-final-hielos-carvan</code></pre>
  </li>
  <li>
    <strong>Instalar dependencias:</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li>
    <strong>Iniciar el servidor de desarrollo:</strong>
    <pre><code>npm run dev</code></pre>
  </li>
  <li>
    <strong>Abrir en el navegador:</strong>
    <p>Visitá <code>http://localhost:5173</code> para ver la aplicación.</p>
  </li>
</ol>

<hr>

<h2>📄 Licencia</h2>
<p>Este proyecto es de código abierto desarrollado para fines educativos.</p>

<hr>

<h2>✒️ Autor</h2>
<p><strong>Bautista Marchese</strong></p>

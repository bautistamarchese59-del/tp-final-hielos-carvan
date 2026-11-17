import { useState } from 'react';
import '../styles/Contacto.css';

export default function Contacto({ carrito = [], vaciarCarrito, eliminarDelCarrito }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [frecuencia, setFrecuencia] = useState('Evento único');
  const [comentarios, setComentarios] = useState('');
 
  const [cargando, setCargando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');

  const totalBolsas = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  // Función para limpiar los campos del formulario
  const limpiarFormulario = () => {
    setNombre('');
    setEmail('');
    setTelefono('');
    setFrecuencia('Evento único');
    setComentarios('');
    console.log('🧹 Formulario limpiado por el usuario.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    setMensajeExito('');

    // Feedback en consola
    console.log('📤 Solicitud de presupuesto enviada:', {
      nombre,
      email: email || 'No especificado',
      telefono,
      frecuencia,
      comentarios: comentarios || 'Sin comentarios',
      items: carrito
    });

    const telefonoWhatsapp = '541167391181';

    const pedidoPayload = {
      clienteNombre: nombre,
      clienteEmail: email || 'No especificado',
      clienteTelefono: telefono,
      frecuencia: frecuencia,
      comentarios: comentarios || 'Sin comentarios',
      itemsResumen: carrito.map(item => `${item.cantidad}x ${item.nombre}`).join(', '),
      fecha: new Date().toLocaleDateString('es-AR')
    };

    const listaProductos = carrito.length > 0
      ? carrito.map((item) => `• *${item.cantidad}x* ${item.nombre}`).join('\n')
      : '• Consulta general de productos';

    const mensaje = [
      '*SOLICITUD DE PRESUPUESTO - HIELOS CARVAN*',
      '',
      '*DETALLE DEL PEDIDO:*',
      listaProductos,
      '',
      '*Precio:* A coordinar',
      '',
      `*Nombre:* ${nombre}`,
      ...(email ? [`*Email:* ${email}`] : []),
      `*Teléfono:* ${telefono}`,
      `*Frecuencia:* ${frecuencia}`,
      ...(comentarios ? [`*Dirección / Comentarios:* ${comentarios}`] : [])
    ].join('\n');

    window.open(
      `https://wa.me/${telefonoWhatsapp}?text=${encodeURIComponent(mensaje)}`,
      '_blank',
      'noopener,noreferrer'
    );

    try {
      const res = await fetch('https://6abda7495121d616d90cfaaf.mockapi.io/pedidos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pedidoPayload)
      });

      if (!res.ok) {
        throw new Error(`Error en el servidor: Status ${res.status}`);
      }

      const respuestaServidor = await res.json();
      console.log('✅ Registrado en MockAPI correctamente:', respuestaServidor);
      setMensajeExito('✅ ¡Solicitud de presupuesto registrada correctamente!');
    } catch (error) {
      console.error('❌ Falló el guardado en MockAPI:', error);
      setMensajeExito('⚠️ La solicitud se enviará por WhatsApp (no se pudo conectar con la base de datos).');
    } finally {
      setCargando(false);
    }

    limpiarFormulario();
    vaciarCarrito();
  };

  return (
    <main className="contacto-page">
      <div className="contacto-container">

        {/* Encabezado Principal */}
        <div className="contacto-header">
          <span className="contacto-badge">SOLICITAR PRESUPUESTO</span>
          <h1 className="contacto-title">ARMAMOS TU PRESUPUESTO A MEDIDA</h1>
          <p className="contacto-subtitle">
            Completá los datos a continuación para enviar tu lista de pedido directamente por WhatsApp y coordinar el mejor precio por cantidad.
          </p>
        </div>

        {/* Mensaje de Estado / Alerta */}
        {mensajeExito && (
          <div className={`alerta-status ${mensajeExito.includes('✅') ? 'exito' : 'warning'}`}>
            {mensajeExito}
          </div>
        )}

        <form onSubmit={handleSubmit} className="checkout-sections-container">
         
          {/* PASO 1: REVISÁ TU PEDIDO */}
          <section className="checkout-step-card">
            <div className="step-card-header">
              <div className="step-number-badge">1</div>
              <div className="step-title-group">
                <h2>REVISÁ TU PEDIDO</h2>
                <p>Verificá los formatos de hielo seleccionados</p>
              </div>
            </div>

            <div className="step-card-body">
              {carrito.length > 0 ? (
                <div className="cart-review-content">
                  <div className="cart-review-actions">
                    <span className="items-count-badge">🛒 {totalBolsas} {totalBolsas === 1 ? 'bolsa en total' : 'bolsas en total'}</span>
                    <button
                      type="button"
                      onClick={vaciarCarrito}
                      className="btn-vaciar-carrito"
                    >
                      🗑️ Vaciar pedido
                    </button>
                  </div>

                  <ul className="cart-item-list">
                    {carrito.map((item) => (
                      <li key={item.id} className="cart-item-row">
                        <div className="cart-item-info">
                          <span className="cart-item-qty">{item.cantidad}x</span>
                          <span className="cart-item-name">{item.nombre}</span>
                        </div>

                        <div className="cart-item-action">
                          <span className="item-subtotal" style={{ color: '#38bdf8', fontSize: '0.85rem' }}>
                            Precio a coordinar
                          </span>
                          <button
                            type="button"
                            onClick={() => eliminarDelCarrito && eliminarDelCarrito(item.id)}
                            className="btn-eliminar-item"
                            title="Eliminar producto"
                          >
                            ✕
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="cart-total-row">
                    <span>MODALIDAD:</span>
                    <strong className="cart-total-price" style={{ fontSize: '1.1rem', color: '#38bdf8' }}>Presupuesto a Medida</strong>
                  </div>
                </div>
              ) : (
                <div className="cart-empty-notice">
                  <span className="empty-icon">🧊</span>
                  <p>Tu lista de pedido está vacía en este momento.</p>
                  <span className="empty-subtext">Podés enviar una consulta general o sumar bolsas desde la sección Productos.</span>
                </div>
              )}
            </div>
          </section>

          {/* PASO 2: TUS DATOS DE ENTREGA */}
          <section className="checkout-step-card">
            <div className="step-card-header">
              <div className="step-number-badge">2</div>
              <div className="step-title-group">
                <h2>TUS DATOS DE ENTREGA</h2>
                <p>Ingresá tus datos de contacto para coordinar el despacho</p>
              </div>
            </div>

            <div className="step-card-body">
              <div className="form-grid">
               
                <div className="form-group">
                  <label htmlFor="nombre">Nombre y Apellido *</label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Ej: Juan Pérez"
                    required
                    value={nombre}
                    onChange={(e) => {
                      setNombre(e.target.value);
                      console.log('📝 Cambio en Nombre:', e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Teléfono / WhatsApp *</label>
                  <input
                    id="telefono"
                    type="tel"
                    placeholder="Ej: 1112345678"
                    required
                    value={telefono}
                    onChange={(e) => {
                      setTelefono(e.target.value);
                      console.log('📝 Cambio en Teléfono:', e.target.value);
                    }}
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="email">Correo Electrónico (opcional)</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      console.log('📝 Cambio en Email:', e.target.value);
                    }}
                  />
                </div>

                <div className="form-group full-width">
                  <label>Frecuencia del Pedido</label>
                  <div className="radio-cards-group">
                    {[
                      { value: 'Evento único', label: '🎉 Evento único' },
                      { value: 'Semanal', label: '📅 Semanal' },
                      { value: 'Entrega diaria', label: '🚚 Entrega diaria' }
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`radio-card-option ${frecuencia === option.value ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name="frecuencia"
                          value={option.value}
                          checked={frecuencia === option.value}
                          onChange={(e) => {
                            setFrecuencia(e.target.value);
                            console.log('📝 Cambio en Frecuencia:', e.target.value);
                          }}
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="comentarios">Dirección o Aclaraciones de Entrega</label>
                  <textarea
                    id="comentarios"
                    rows="3"
                    placeholder="Calle, altura, localidad, fecha/hora deseada o aclaraciones de entrega..."
                    value={comentarios}
                    onChange={(e) => {
                      setComentarios(e.target.value);
                      console.log('📝 Cambio en Comentarios:', e.target.value);
                    }}
                  ></textarea>
                </div>

              </div>

              {/* Botón para limpiar campos manualmente */}
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={limpiarFormulario}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  🧹 Limpiar campos
                </button>
              </div>

            </div>
          </section>

          {/* PASO 3: CONFIRMACIÓN Y ENVÍO */}
          <section className="checkout-step-card step-submit-card">
            <div className="step-card-header">
              <div className="step-number-badge">3</div>
              <div className="step-title-group">
                <h2>ENVÍO Y COTIZACIÓN POR WHATSAPP</h2>
                <p>Al presionar el botón serás redirigido con tu lista de pedido</p>
              </div>
            </div>

            <div className="step-card-body">
              <div className="submit-summary-box">
                <div className="submit-info-text">
                  <span>Modalidad: <strong>Presupuesto Personalizado</strong></span>
                  <small>✓ Envío directo de cotización por WhatsApp</small>
                </div>

                <button type="submit" className="btn-submit-whatsapp" disabled={cargando}>
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99 0-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>{cargando ? 'ENVIANDO SOLICITUD...' : 'ENVIAR SOLICITUD DE PRESUPUESTO'}</span>
                </button>
              </div>
            </div>
          </section>

        </form>

      </div>
    </main>
  );
}
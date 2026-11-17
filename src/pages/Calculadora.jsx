import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Calculadora.css';

export default function Calculadora() {
  const navigate = useNavigate();

  // Usamos string para permitir borrar el campo por completo mientras se escribe
  const [personasInput, setPersonasInput] = useState('20');
  const [clima, setClima] = useState('templado'); // fresco, templado, caluroso
  const [duracion, setDuracion] = useState('medio'); // corto, medio, largo
  const [enfriarBebidas, setEnfriarBebidas] = useState(true);

  // Convertimos a número de forma segura para los cálculos (si está vacío cuenta como 0)
  const personas = personasInput === '' ? 0 : parseInt(personasInput, 10) || 0;

  // Lógica de cálculo de kilos de hielo
  const calcularKilos = () => {
    if (personas <= 0) return 3;
    let basePorPersona = 0.8;

    if (clima === 'fresco') basePorPersona = 0.6;
    if (clima === 'caluroso') basePorPersona = 1.2;

    if (duracion === 'corto') basePorPersona *= 0.8;
    if (duracion === 'largo') basePorPersona *= 1.4;

    let total = personas * basePorPersona;

    if (enfriarBebidas) {
      total += personas * 0.5;
    }

    return Math.max(3, Math.round(total));
  };

  const kilosCalculados = calcularKilos();

  const handlePedirCalculo = () => {
    const mensaje = encodeURIComponent(
      `¡Hola Hielos Carvan! Usé la calculadora de la web para un evento de ${personas} personas (${duracion}, clima ${clima}). Necesitaría un presupuesto aproximado por ${kilosCalculados} kg de hielo.`
    );
    window.open(`https://wa.me/5491167391181?text=${mensaje}`, '_blank');
  };

  return (
    <main className="calculadora-page">
      <div className="container">

        {/* Hero de la Calculadora */}
        <section className="calc-hero">
          <span className="calc-hero__badge">⚡ HERRAMIENTA GRATUITA</span>
          <h1>
            ¿CUÁNTO HIELO NECESITÁS<br />
            <span className="title-cyan">PARA TU EVENTO?</span>
          </h1>
          <p>
            Ingresá la cantidad de invitados y el tipo de juntada, y te decimos cuántos kilos de hielo pedir — sin quedarte corto ni pasarte.
          </p>
        </section>

        {/* Contenedor Interactivo */}
        <div className="calc-card-container">
          
          {/* 1. Cantidad de personas */}
          <div className="calc-step">
            <label>👥 ¿Cuántas personas son?</label>
            <div className="calc-input-group">
              <input
                type="number"
                min="0"
                value={personasInput}
                onChange={(e) => setPersonasInput(e.target.value)}
                placeholder="Ej. 20"
              />
              <span className="input-unit">invitados</span>
            </div>
          </div>

          {/* 2. Clima esperado */}
          <div className="calc-step">
            <label>🌡️ ¿Qué temperatura esperás?</label>
            <div className="calc-options-grid">
              <button
                type="button"
                className={`calc-opt-btn ${clima === 'fresco' ? 'active' : ''}`}
                onClick={() => setClima('fresco')}
              >
                <strong>Fresco</strong>
                <span>Hasta 22°</span>
              </button>
              <button
                type="button"
                className={`calc-opt-btn ${clima === 'templado' ? 'active' : ''}`}
                onClick={() => setClima('templado')}
              >
                <strong>Templado</strong>
                <span>22° a 30°</span>
              </button>
              <button
                type="button"
                className={`calc-opt-btn ${clima === 'caluroso' ? 'active' : ''}`}
                onClick={() => setClima('caluroso')}
              >
                <strong>Caluroso</strong>
                <span>Más de 30°</span>
              </button>
            </div>
          </div>

          {/* 3. Duración */}
          <div className="calc-step">
            <label>⏱️ ¿Cuánto dura la juntada?</label>
            <div className="calc-options-grid">
              <button
                type="button"
                className={`calc-opt-btn ${duracion === 'corto' ? 'active' : ''}`}
                onClick={() => setDuracion('corto')}
              >
                <strong>Hasta 3 hs</strong>
                <span>Junta corta</span>
              </button>
              <button
                type="button"
                className={`calc-opt-btn ${duracion === 'medio' ? 'active' : ''}`}
                onClick={() => setDuracion('medio')}
              >
                <strong>4 a 6 hs</strong>
                <span>Tarde / Noche</span>
              </button>
              <button
                type="button"
                className={`calc-opt-btn ${duracion === 'largo' ? 'active' : ''}`}
                onClick={() => setDuracion('largo')}
              >
                <strong>Más de 6 hs</strong>
                <span>Todo el día / Fiesta</span>
              </button>
            </div>
          </div>

          {/* 4. Check extra */}
          <div className="calc-step-checkbox">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={enfriarBebidas}
                onChange={(e) => setEnfriarBebidas(e.target.checked)}
              />
              <span>Necesito hielo extra para enfriar bebidas (botellas / latas en tachos o conservadoras)</span>
            </label>
          </div>

          {/* Resultado Destacado */}
          <div className="calc-result-box">
            <span className="result-subtitle">NECESITÁS APROXIMADAMENTE</span>
            <div className="result-number">{kilosCalculados} kg</div>
            <p className="result-legend">
              Cálculo estimado a modo orientativo. Te sugerimos combinar bolsas de 3kg y 10kg según tu comodidad.
            </p>
            <div className="result-actions">
              <button onClick={() => navigate('/productos')} className="btn-cyan">
                Ver bolsas y armar pedido →
              </button>
              <button onClick={handlePedirCalculo} className="btn-whatsapp-calc">
                Pedir este cálculo por WhatsApp 💬
              </button>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
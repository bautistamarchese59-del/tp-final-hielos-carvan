export default function Cards({ titulo, precioViejo, precio, descuento, cuotas, envio, imagen, badge }) {
  return (
    <article className="producto">
      {badge && <span className="producto__badge">{badge}</span>}
      <div className="producto__img">
        <img src={imagen} alt={titulo} />
      </div>
      <div className="producto__info">
        <h3 className="producto__titulo">{titulo}</h3>
        {precioViejo && <p className="producto__precio-viejo">$ {precioViejo}</p>}
        <p className="producto__precio">$ {precio} <span className="producto__descuento">{descuento}</span></p>
        <p className="producto__cuotas">{cuotas}</p>
        <p className="producto__envio"><i className="fa-solid fa-truck-fast"></i> {envio}</p>
        <a href="/contacto" className="producto__btn">Pedir ahora</a>
      </div>
    </article>
  );
}
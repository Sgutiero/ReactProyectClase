import React from "react";
import '../styleSheets/cards.css';

function Testimonio(props) {
    return (
      <div className="contenedor-testimonio">
        <img className="imagen-testimonio" src={require(`../images/react-${props.imagen}.jpg`)}
        alt='Primera Imagen' />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong>{props.pais}</p>
        <p className="cargo-testimonio">{props.skill}<strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.manejo}"</p>
      </div>
      </div>
    );
}

export default Testimonio;
import React from 'react';
import '../hojas-de-estilos/Boton.css';

function Boton({ texto, esBotonClic, manejarClic }){//Desestructuracion
  return (
    <button 
    //condicional JavaScript
    className={ esBotonClic ? 'boton-clic' : 'boton-reiniciar' }
    onClick={manejarClic}>
      {texto}
    </button>

  );

}

export default Boton;
import React from 'react';
import '../hojas-de-estilos/Contador.css'

function Contador ({ numClics }){//Desestructuracion va entre {} porque es codigo JS
    return (
      <div className='contador'>
        {numClics}
      </div>
    );
}

export default Contador;
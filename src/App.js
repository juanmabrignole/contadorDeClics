import './App.css';
import freecodecamplogo from './imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js'; 
import { useState} from 'react';

function App() {

  const [numClics, setnumClics] = useState (0);

  const manejarClic = () => {
    setnumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setnumClics(0);
  }

  return (
    <div className="App">
        <div className='freecodecamp-logo-contenedor'>
        <img  
        className='freecodecamp-logo'
        src={freecodecamplogo}
        alt='Logo de freeCodeCamp' />
      </div>

      <div className='contenedor-contador'>
        <Contador
        numClics={numClics} />
        
        <Boton
         texto='Clic'
         EsBotonClic={true}
         manejarClic={manejarClic} />
        
        <Boton 
         texto='Reiniciar'
         EsBotonClic={false}
         manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Razas from './Components/ListaRazas';

function App() {
  return (
    <body>
      <div>
        <h1>Razas de Perros.</h1>
        <h3>Aqui una lista con las razas de nuestros amigos peludos.</h3>
      </div>
      <div>
        <Razas></Razas>
      </div>
    </body>
    
  );
}

export default App;

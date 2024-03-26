import React from 'react';
import './App.css';
import Razas from './Components/ListaRazas';
import RazaDetalle from './Components/Detalles';
import { useState } from 'react';

function App() {

  return (
    <body>
      <div>
        <h1>Razas de Perros.</h1>
        <h3>Aqui una lista con las razas de nuestros amigos peludos.</h3>
      </div>
      <div>
        <Razas/>
              </div>
      <div>
        <RazaDetalle/>
      </div>
    </body>
  );
} 

export default App;

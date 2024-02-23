import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mostrar_row from './components/Row';
import Tabla from './components/Tabla';

function App() {
  return (
    <div>
      <h1>Lista de Automóviles</h1>
      <Tabla/>
    </div>
  );
}

export default App;
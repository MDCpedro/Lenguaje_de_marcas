import React from 'react';
import './App.css';
import Navbar from './components/BarraNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './views/inicio';
import Sitios_interes from './views/sitios_de_interes';
import Hoteles from './views/hoteles';
import Restaurantes from './views/restaurantes';
import Actividades from './views/actividades';

function App() {
  return (
    <body>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index Component={Inicio}></Route>
          <Route path="inicio" Component={Inicio}></Route>
          <Route path="sitios_de_interes" Component={Sitios_interes}></Route>
          <Route path="hoteles" Component={Hoteles}></Route>
          <Route path="restaurantes" Component={Restaurantes}></Route>
          <Route path="actividades" Component={Actividades}></Route>
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;

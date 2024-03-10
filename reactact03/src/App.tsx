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
      <Navbar/>
      <BrowserRouter>
          <Routes>
          <Route index Component={Inicio}></Route>
          <Route path="/views/inicio.tsx" Component={Inicio}></Route>
          <Route path="/views/sitios_de_interes.tsx" Component={Sitios_interes}></Route>
          <Route path="/views/hoteles.tsx" Component={Hoteles}></Route>
          <Route path="/views/restaurantes.tsx" Component={Restaurantes}></Route>
          <Route path="/views/actividades.tsx" Component={Actividades}></Route>
          </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;

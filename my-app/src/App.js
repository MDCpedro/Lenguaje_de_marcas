import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoList from './componentes/TodoList'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Tu lista de tareas.
        </p>
        <TodoList></TodoList>

      </header>
    </div>
  );
}

export default App;

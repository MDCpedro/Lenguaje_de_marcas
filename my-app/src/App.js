import logo from './logo.svg';
import './App.css';
import TodoList from './componentes/TodoList';
import CuadroTexto from './componentes/TodoCuadroTexto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Tu lista de tareas.
        </p>

        <CuadroTexto class="cuadrotexto"></CuadroTexto>
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;

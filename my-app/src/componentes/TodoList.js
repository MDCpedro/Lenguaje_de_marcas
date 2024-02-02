import React from "react";
import TodoItem from "./Todoitem";
import { Button } from "react-bootstrap";

function TodoList() {
    const [tasks, setTask] = React.useState(["Tasca 1", "Tasca 2"]);

    function addTask() {
        setTask(currentTasks => [...currentTasks, "Nueva tarea"])
    }

    return (
        <div>
            <h2>Mi lista de tareas</h2>
            <ul>
                {tasks.map((task, index) => (
                   <TodoItem key={index} content={task} />
                ))}
            </ul>
            <Button variant="success" onClick={() => addTask("Nueva ")}>Añadir tarea</Button>
        </div>
    );
}
export default TodoList;
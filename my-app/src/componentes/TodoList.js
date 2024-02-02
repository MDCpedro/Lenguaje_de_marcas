import React from "react";
import TodoItem from "./Todoitem";

function TodoList() {
    const [tasks, setTask] = React.useState(["Tasca 1", "Tasca 2"]);

    return (
        <div>
            <h2>Mi lista de tareas</h2>
            <ul>
                {tasks.map((task, index) => (
                   <TodoItem key={index} content={task} />
                ))}
            </ul>
        </div>
    );
}
export default TodoList;
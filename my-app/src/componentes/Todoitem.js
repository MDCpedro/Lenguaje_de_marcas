import React from "react";
import { Button } from "react-bootstrap";
function TodoItem({ content }) {
    return (
        <div className="">
            <li>{content}</li>
        </div>);
}
export default TodoItem;
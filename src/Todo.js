// should display a <div> with the task of the todo
import React from 'react';
import './Todo.css';

const Todo = ({ id, task, removeTodo }) => {
    const handleRemove = () => {
        removeTodo(id);
    }

    return (
        <div className="Todo">
            <p>{task}</p>
            <button className="Todo-remove" onClick={handleRemove}>X</button>
        </div>
    )
}

export default Todo;
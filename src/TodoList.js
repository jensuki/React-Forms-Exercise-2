//renders <NewTodoForm/> , list of the Todo components
// put state of todos in this component
import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);


    // function to add a new todo
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo]);
    }

    // function to remove todo by id
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    return (
        <>
            <NewTodoForm addTodo={addTodo} />
            <ul>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        removeTodo={removeTodo} />
                ))}
            </ul>
        </>
    )
}

export default TodoList;

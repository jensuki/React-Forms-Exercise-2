//renders a form with 1 text input for the todo task
// on submit, new todo component should be created
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css'

const NewTodoForm = ({ addTodo }) => {
    const [task, setTask] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    const handleChange = (e) => {
        setTask(e.target.value);
        // reset error msg when user starts typing
        setIsEmpty(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task === '') {
            setIsEmpty(true);
            return;
        }
        addTodo({ id: uuid(), task });
        setTask(''); // clear input after submit
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">New Todo:</label>
                <input
                    type="text"
                    id="task"
                    name="task"
                    value={task}
                    onChange={handleChange} />
                <button>Add Todo</button>
            </form>
            {isEmpty && <p style={{ color: 'red' }}>Task cannot be empty</p>}
        </div>
    )
}

export default NewTodoForm;
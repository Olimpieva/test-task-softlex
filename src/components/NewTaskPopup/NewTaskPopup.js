import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../redux/actions';
import { availableFields } from '../../utils/constants';

import './NewTaskPopup.css';

function NewTaskPopup({ isOpened, onClose }) {

    const dispatch = useDispatch();
    const [newTaskForm, setNewTaskForm] = useState({ username: '', email: '', text: '' });

    const onChangeHandler = (event) => {
        const input = event.target;

        setNewTaskForm(prevState => ({
            ...prevState,
            [input.name]: input.value
        }))
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(createTask(newTaskForm));
    };

    return (
        <div className={`new-task-popup ${isOpened && "new-task-popup__opened"}`}>
            <div className="new-task-popup__container">
                <button type="reset" onClick={onClose}>Close</button>
                <form onSubmit={submitHandler}>
                    <h2>New Task</h2>
                    <fieldset>
                        <label>Text</label>
                        <input name={availableFields.text}
                            value={newTaskForm.text}
                            onChange={onChangeHandler}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <label>Username</label>
                        <input name={availableFields.username}
                            type="username"
                            minLength="2"
                            maxLength="30"
                            value={newTaskForm.username}
                            onChange={onChangeHandler}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <label>Email</label>
                        <input name={availableFields.email}
                            type="email"
                            pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
                            value={newTaskForm.email}
                            onChange={onChangeHandler}
                            required
                        />
                    </fieldset>
                    <button type="submit">Create Task</button>
                </form>
            </div>
        </div>
    );
};

export default NewTaskPopup;
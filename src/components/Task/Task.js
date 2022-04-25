import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../redux/actions';
import { availableFields } from '../../utils/constants';

import './Task.css';

function Task({ item, adminAccess }) {

    const { id, status, username, email, text } = item;

    const dispatch = useDispatch();
    const [taskForm, setTaskForm] = useState({ status, username, email, text });

    const isInputChanged = useCallback(inputName => item[inputName] !== taskForm[inputName], [item, taskForm]);

    const onChangeHandler = (event) => {
        setTaskForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(updateTask({
            id,
            status: taskForm.status,
            username: taskForm.username,
            email: taskForm.email,
            text: taskForm.text,
        }));
    };

    return (
        <li className="task">
            <span>{id}</span>
            <form onSubmit={submitHandler}>
                <fieldset>
                    <label>Status</label>
                    <input name={availableFields.status} value={taskForm.status} onChange={onChangeHandler} disabled={!adminAccess} />
                    {adminAccess && <button disabled={!isInputChanged(availableFields.status)}>Edit</button>}
                </fieldset>
                <fieldset>
                    <label>Text</label>
                    <input name={availableFields.text} value={taskForm.text} onChange={onChangeHandler} disabled={!adminAccess} />
                    {adminAccess && <button disabled={!isInputChanged(availableFields.text)}>Edit</button>}
                </fieldset>
                <fieldset>
                    <label>Username</label>
                    <input name={availableFields.username} value={taskForm.username} onChange={onChangeHandler} disabled />
                </fieldset>
                <fieldset>
                    <label>Email</label>
                    <input name={availableFields.email} value={taskForm.email} onChange={onChangeHandler} disabled />
                </fieldset>
            </form>
        </li>
    );
}

export default React.memo(Task);
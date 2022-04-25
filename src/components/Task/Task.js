import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../redux/actions';
import { availableFields } from '../../utils/constants';
import InputField from '../InputField/InputField';

import './Task.css';

function Task({ item, adminAccess }) {

    const { id, status, username, email, text } = item;

    const dispatch = useDispatch();
    const [taskForm, setTaskForm] = useState({ status, username, email, text });

    const isFieldsChanged = useCallback(() => {

        for (const key in taskForm) {
            if (taskForm[key] !== item[key]) {
                return true;
            }
        }

        return false;
    }, [item, taskForm]);

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        console.log({ name, value })
        setTaskForm(prevState => ({
            ...prevState,
            [name]: value
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
            <span>№ {id}</span>
            <form className="task-form" onSubmit={submitHandler}>

                <select className="task-form__status-list" defaultValue={status} name="status" onChange={onChangeHandler} disabled={!adminAccess}>
                    <option value={0}>Not Done & Not Edited</option>
                    <option value={1}>Not Done & Edited</option>
                    <option value={10}>Done & Not Edited</option>
                    <option value={11}>Done & Edited</option>
                </select>

                <InputField
                    type="text"
                    name={availableFields.text}
                    formName="task-form"
                    title="Text"
                    isEdited={adminAccess}
                    required
                    value={taskForm.text}
                    onChange={onChangeHandler}
                />

                <InputField
                    type="text"
                    name={availableFields.username}
                    formName="task-form"
                    title="Username"
                    isEdited={false}
                    required
                    value={taskForm.username}
                    onChange={onChangeHandler}
                />

                <InputField
                    type="email"
                    name={availableFields.email}
                    formName="task-form"
                    title="Email"
                    isEdited={false}
                    pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
                    required
                    value={taskForm.email}
                    onChange={onChangeHandler}
                />

                {adminAccess && <button className="task-form__button" disabled={!isFieldsChanged()}>Edit</button>}
            </form>
        </li>
    );
}

export default React.memo(Task);
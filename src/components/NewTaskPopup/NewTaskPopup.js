import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTask } from '../../redux/actions';
import { availableFields } from '../../utils/constants';
import InputField from '../InputField/InputField';

import './NewTaskPopup.css';

const initialNewTaskForm = { username: '', email: '', text: '' }

function NewTaskPopup({ isOpened, onClose }) {

    const dispatch = useDispatch();
    const [newTaskForm, setNewTaskForm] = useState(initialNewTaskForm);

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setNewTaskForm(prevState => ({ ...prevState, [name]: value }));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(createTask(newTaskForm));
        onClose();
        setNewTaskForm(initialNewTaskForm);
    };

    return (
        <div className={`new-task-popup ${isOpened && "new-task-popup_opened"}`}>
            <div className="new-task-popup__container">
                <button className="new-task-popup__button new-task-popup__button_close" type="reset" onClick={onClose}>&times;</button>
                <form className="new-task-form" onSubmit={submitHandler}>
                    <h2 className="new-task-popup__title">New Task</h2>

                    <InputField
                        type="text"
                        name={availableFields.text}
                        formName="new-task-popup"
                        title="Text"
                        isEdited={true}
                        required
                        value={newTaskForm.text}
                        onChange={onChangeHandler}
                    />
                    <InputField
                        type="email"
                        name={availableFields.email}
                        formName="new-task-popup"
                        title="Email"
                        isEdited={true}
                        pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
                        required
                        value={newTaskForm.email}
                        onChange={onChangeHandler}
                    />
                    <InputField
                        type="text"
                        name={availableFields.username}
                        formName="new-task-popup"
                        title="Username"
                        isEdited={true}
                        required
                        value={newTaskForm.username}
                        onChange={onChangeHandler}
                    />

                    <button type="submit" className="new-task-popup__button new-task-popup__button_submit">Create Task</button>
                </form>
            </div>
        </div>
    );
};

export default NewTaskPopup;
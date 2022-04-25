import React, { useState } from 'react';

import './Task.css';

function Task({item, adminAccess}) {

    const {status, username, email, text} = item;
    const [inputState, setInputState] = useState({status, username, email, text})

    const onChangeHandler = (event) => {
        setInputState(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value
            }))
    };

    return (
        <li className="task">
            <span>{item.id}</span>
            <form>
                <fieldset>
                    <label>Status</label>
                    <input name='status' value={inputState.status} onChange={onChangeHandler} disabled={!adminAccess} />
                    {adminAccess && <button>Edit</button>}
                </fieldset>
                <fieldset>
                    <label>Text</label>
                    <input name='text' value={inputState.text} onChange={onChangeHandler} disabled={!adminAccess}/>
                    {adminAccess && <button>Edit</button>}
                </fieldset>
                <fieldset>
                    <label>Username</label>
                    <input name='username' value={inputState.username} onChange={onChangeHandler} disabled/>
                </fieldset>
                <fieldset>
                    <label>Email</label>
                    <input name='email' value={inputState.email} onChange={onChangeHandler} disabled/>
                </fieldset>
            </form>
        </li>
    );
}

export default Task;
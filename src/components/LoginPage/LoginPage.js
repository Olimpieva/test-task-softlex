import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../redux/actions';

import './LoginPage.css';

function LoginPage() {

    const dispatch = useDispatch();
    const [loginForm, setLoginForm] = useState({ username: '', password: '' });

    const onChangeHandler = event => {
        const input = event.target;

        setLoginForm(prevState => ({
            ...prevState,
            [input.name]: input.value
        }))
    };

    const submitHandler = event => {
        event.preventDefault();
        dispatch(login(loginForm));
    };

    return (
        <div className="login-page">
            <header className="header login-page__header">
                <Link to="/">
                    <button>To tasks</button>
                </Link>
            </header>
            <main className="login-page__content">
                <form onSubmit={submitHandler}>
                    <fieldset>
                        <label>Username</label>
                        <input name="username"
                            type="text"
                            minLength="2"
                            value={loginForm.username}
                            onChange={onChangeHandler}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        <input name="password"
                            type="password"
                            minLength="3"
                            value={loginForm.password}
                            onChange={onChangeHandler}
                            required
                        />
                    </fieldset>
                    <button type="submit">Log in</button>
                </form>
            </main>
        </div>
    );
}

export default LoginPage;
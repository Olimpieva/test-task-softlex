import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/actions';
import Header from '../Header/Header';

import './LoginPage.css';

function LoginPage() {

    const dispatch = useDispatch();
    const loginForm = useRef(null);

    const submitHandler = event => {
        event.preventDefault();
        const loginData = new FormData(loginForm.current);

        dispatch(login(loginData));
    };

    return (
        <div className="login-page">
            <Header />
            <main className="login-page__content">
                <form ref={loginForm} onSubmit={submitHandler}>
                    <fieldset>
                        <label>Username</label>
                        <input name="username"
                            type="text"
                            minLength="2"
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        <input name="password"
                            type="password"
                            minLength="3"
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
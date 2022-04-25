import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { checkToken } from '../../redux/actions';
import { userSelector } from '../../redux/selectors';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';

import './App.css';

function App() {

    const dispatch = useDispatch();
    const { username, loading, error } = useSelector(userSelector);

    console.log({ error })

    useEffect(() => {
        dispatch(checkToken());
    }, [dispatch])

    if (loading || username === undefined) {
        return <div>Loading</div>
    }

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signin" element={!username ? <LoginPage /> : <Navigate replace to="/" />} />
                <Route path="*" element={<div>Not Found Page</div>} />
            </Routes>
        </div>
    );
};

export default App;
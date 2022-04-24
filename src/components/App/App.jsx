import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from '../MainPage/MainPage';

import './App.css';

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signin" element={<div>Login Page</div>} />
                <Route path="*" element={<div>Not Found Page</div>} />
            </Routes>
        </div>
    );
}

export default App;
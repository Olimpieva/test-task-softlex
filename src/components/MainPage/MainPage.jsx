import React from 'react';
import Header from '../Header/Header';
import Tasklist from '../TaskList/TaskList';

import './MainPage.css';

function MainPage() {

    return (
        <div className="main-page">
            <Header />

            <main className="main-page__content">
                <h1>Tasks</h1>
                <Tasklist />
            </main>
        </div>
    );
}

export default MainPage;
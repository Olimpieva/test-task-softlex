import React from 'react';
import Tasklist from '../TaskList/TaskList';

import './MainPage.css';

function MainPage() {

    return (
        <div className="main-page">
            <h1>Tasks</h1>
            <Tasklist />
        </div>
    );
}

export default MainPage;
import React, { useState } from 'react';
import Header from '../Header/Header';
import NewTaskPopup from '../NewTaskPopup/NewTaskPopup';
import Tasklist from '../TaskList/TaskList';

import './MainPage.css';

function MainPage() {

    const [isNewTaskPopupOpened, setIsNewTaskPopupOpened] = useState(false);

    const closeNewTaskPopup = () => {
        setIsNewTaskPopupOpened(false);
    }

    const openNewTaskPopup = () => {
        setIsNewTaskPopupOpened(true);
    }

    return (
        <div className="main-page">
            <Header />

            <main className="main-page__content">
                <button onClick={openNewTaskPopup}>New Task</button>
                <h1>Tasks</h1>
                <Tasklist />

                <NewTaskPopup isOpened={isNewTaskPopupOpened} onClose={closeNewTaskPopup} />
            </main>
        </div>
    );
}

export default MainPage;
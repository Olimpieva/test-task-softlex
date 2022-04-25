import React, { useState } from 'react';
import Header from '../Header/Header';
import NewTaskPopup from '../NewTaskPopup/NewTaskPopup';
import SortPanel from '../SortPanel/SortPanel';
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
                <SortPanel />
                <div className="main-page__tasks-info">
                    <button className="main-page__button" onClick={openNewTaskPopup}>New Task</button>
                    <Tasklist />
                </div>
                <NewTaskPopup isOpened={isNewTaskPopupOpened} onClose={closeNewTaskPopup} />
            </main>
        </div>
    );
}

export default MainPage;
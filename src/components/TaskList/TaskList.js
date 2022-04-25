import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTasks } from '../../redux/actions';
import { currentTasksSelector, userSelector } from '../../redux/selectors';
import PageControlPanel from '../PageControlPanel/PageControlPanel';
import Preloader from '../Preloader/Preloader';
import Task from '../Task/Task';

import './TaskList.css';

function TaskList() {

    const dispatch = useDispatch();
    const { entities: tasks, settings } = useSelector(currentTasksSelector);
    const { username, loading } = useSelector(userSelector);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])

    useEffect(() => {
        dispatch(getTasks());
    }, [settings, dispatch]);

    if (!tasks || loading) {
        return <div className="task-list">
            <Preloader />
        </div>
    }

    return (
        <div className="task-list">
            <ul className='task-list__list'>
                {tasks.map(task => <Task key={task.id} item={task} adminAccess={username} />)}
            </ul>

            <PageControlPanel />
        </div>
    );
};

export default TaskList;
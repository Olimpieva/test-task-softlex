import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTasks } from '../../redux/actions';
import { currentTasksSelector } from '../../redux/selectors';
import SortPanel from '../SortPanel/SortPanel';
import Task from '../Task/Task';

import './TaskList.css';

function TaskList() {

    const dispatch = useDispatch();
    const {entities: tasks} = useSelector(currentTasksSelector);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])

    if (!tasks) {
        return <div>Loading</div>
    }

    return (
        <div className="task-list">
            <ul className='task-list'>
                {tasks.map(task => <Task key={task.id} item={task} />)}
            </ul>
        </div>
    );
};

export default TaskList;
import React from 'react';
import { useDispatch } from 'react-redux';
import { setRequestSettings } from '../../redux/actions';
import { availableFields, availableSortDirection } from '../../utils/constants';

import './SortPanel.css';

function SortPanel() {

    const dispatch = useDispatch();

    const sortByFieldHandler = (event) => {
        dispatch(setRequestSettings({ sortField: event.target.name, page: 1 }));
    }

    const sortByDirectionHandler = (event) => {
        dispatch(setRequestSettings({ sortDirection: event.target.name, page: 1 }));
    }

    return (
        <div className='sort-panel'>
            <h3>Sort</h3>
            <div className='sort-panel__field'>
                <button name={availableFields.id} className='sort-panel__button' onClick={sortByFieldHandler}>Id</button>
                <button name={availableFields.username} className='sort-panel__button' onClick={sortByFieldHandler}>Username</button>
                <button name={availableFields.email} className='sort-panel__button' onClick={sortByFieldHandler}>Email</button>
                <button name={availableFields.status} className='sort-panel__button' onClick={sortByFieldHandler}>Status</button>
            </div>
            <div className='sort-panel__direction'>
                <button name={availableSortDirection.increasing} className='sort-panel__button' onClick={sortByDirectionHandler}>Increasing</button>
                <button name={availableSortDirection.decreasing} className='sort-panel__button' onClick={sortByDirectionHandler}>Decreasing</button>
            </div>
        </div>
    );
}

export default SortPanel;
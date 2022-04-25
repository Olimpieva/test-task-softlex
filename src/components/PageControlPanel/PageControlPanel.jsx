import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setRequestSettings } from '../../redux/actions';
import { currentTasksSelector, lastPageNumberSelector } from '../../redux/selectors';

import './PageControlPanel.css';

function PageControlPanel() {

    const dispatch = useDispatch();

    const { settings: { page: currentPage } } = useSelector(currentTasksSelector);
    const lastPageNumber = useSelector(lastPageNumberSelector);

    const turnPageHandler = (event) => {
        event.target.name === "next-page" ?
            dispatch(setRequestSettings({ page: currentPage + 1 }))
            :
            dispatch(setRequestSettings({ page: currentPage - 1 }));
    }

    return (
        <div className="page-control-panel">
            {currentPage !== 1 && <button className="page-control-panel__button" name="prev-page" onClick={turnPageHandler}>Back</button>}
            {currentPage !== lastPageNumber && <button className="page-control-panel__button" name="next-page" onClick={turnPageHandler}>Next</button>}
        </div>
    );
}

export default PageControlPanel;
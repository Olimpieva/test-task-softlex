import api from "../../utils/Api";
import handleError from "./errorHandler";
import {
    GET_TASKS,
    REQUEST,
    SET_REQUEST_SETTINGS,
    SUCCESS,
} from "./actionTypes";

export const getTasks = () => async (dispatch, getState) => {

    const { tasks: { loading, settings } } = getState();

    if (loading) {
        return;
    };

    dispatch({ type: GET_TASKS + REQUEST });

    try {
        const { message: { tasks, total_task_count: total } } = await api.getTasks(settings);

        dispatch({ type: GET_TASKS + SUCCESS, payload: { tasks, total } });
    } catch (error) {
        dispatch(handleError({ errorCode: 500, action: GET_TASKS }));
    };
};

export const setRequestSettings = (settings) => ({ type: SET_REQUEST_SETTINGS, payload: settings });



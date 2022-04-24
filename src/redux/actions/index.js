import api from "../../utils/Api";
import handleError from "./errorHandler";
import {
    GET_TASKS,
    LOGIN,
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

export const login = (loginData) => async (dispatch, getState) => {

    const { user: { loading } } = getState();

    if (loading) {
        return;
    }

    dispatch({ type: LOGIN + REQUEST });

    try {
        const { message: { token } } = await api.login(loginData);
        const username = loginData.get('username');

        localStorage.setItem('jwt', token);
        localStorage.setItem('username', username);

        dispatch({ type: LOGIN + SUCCESS, payload: username });
    } catch (error) {
        dispatch(handleError({ errorCode: 500, action: LOGIN }));
    };

}



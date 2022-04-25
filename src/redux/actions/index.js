import api from "../../utils/Api";
import handleError from "./errorHandler";
import {
    CREATE_TASK,
    FAILURE,
    GET_TASKS,
    LOGIN,
    LOGOUT,
    REQUEST,
    SET_REQUEST_SETTINGS,
    SUCCESS,
    UPDATE_TASK,
} from "./actionTypes";
import { createFormData, getCookie } from "../../utils/constants";

export const checkToken = () => (dispatch) => {
    const jwt = getCookie('jwt');

    if (!jwt) {
        return dispatch({ type: LOGIN + FAILURE })
    }

    const username = getCookie('username');
    dispatch({ type: LOGIN + SUCCESS, payload: username })
};

export const login = ({ username, password }) => async (dispatch, getState) => {
    const { user: { loading } } = getState();

    if (loading) {
        return;
    }

    dispatch({ type: LOGIN + REQUEST });

    const requestData = createFormData({ username, password });

    try {
        const { status, message } = await api.login(requestData);

        if (status === "error") {
            throw Error();
        }

        document.cookie = `jwt=${message.token}; path=/; max-age=86400`;
        document.cookie = `username=${username}; path=/; max-age=86400`;

        dispatch({ type: LOGIN + SUCCESS, payload: username });
    } catch (error) {
        dispatch(handleError({ errorCode: error.errorCode || 401, action: LOGIN }));
    };
};

export const logout = () => {
    document.cookie = `jwt=; path=/; max-age=0`;
    document.cookie = `username=; path=/; max-age=0`;

    return { type: LOGOUT };
}

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

export const createTask = (newTaskData) => async (dispatch, getState) => {

    const { tasks: { loading } } = getState();

    if (loading) {
        return;
    };

    dispatch({ type: GET_TASKS + REQUEST });

    const requestData = createFormData(newTaskData);

    try {
        const { status, message } = await api.createTask(requestData);

        if (status === "error") {
            throw Error();
        }

        dispatch({ type: CREATE_TASK + SUCCESS, payload: message })
    } catch (error) {
        dispatch(handleError({ errorCode: error.errorCode || 500, action: CREATE_TASK }));
    };
}

export const updateTask = ({ id, status, text, username, email }) => async (dispatch, getState) => {
    const { tasks: { loading } } = getState();
    const token = getCookie('jwt');

    dispatch({ type: GET_TASKS + REQUEST });

    if (!token || loading) {
        return;
    }

    const requestData = createFormData({ token, status, text });

    try {
        const response = await api.updateTask(requestData, id);

        if (response.status === "error") {
            throw Error();
        }

        dispatch({ type: UPDATE_TASK + SUCCESS, payload: { id, status, text, username, email } })
    } catch (error) {
        dispatch(handleError({ errorCode: error.errorCode || 401, action: UPDATE_TASK }));
    };
};



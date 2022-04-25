import api from "../../utils/Api";
import handleError from "./errorHandler";
import {
    FAILURE,
    GET_TASKS,
    LOGIN,
    REQUEST,
    SET_REQUEST_SETTINGS,
    SUCCESS,
} from "./actionTypes";
import { getCookie } from "../../utils/constants";

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

    console.log('Ya tut?')

    const { user: { loading } } = getState();

    if (loading) {
        return;
    }

    dispatch({ type: LOGIN + REQUEST });

    try {
        const { status, message } = await api.login(loginData);

        if (status === "error") {
            throw Error();
        }

        const username = loginData.get('username');
        document.cookie = `jwt=${message.token}; path=/; max-age=86400`;
        document.cookie = `username=${username}; path=/; max-age=86400`;

        dispatch({ type: LOGIN + SUCCESS, payload: username })
    } catch (error) {
        dispatch(handleError({ errorCode: error.errorCode || 401, action: LOGIN }));
    };
};

export const checkToken = () => (dispatch) => {

    const jwt = getCookie('jwt');

    if (!jwt) {
        return dispatch({ type: LOGIN + FAILURE })
    }

    const username = getCookie('username');

    dispatch({ type: LOGIN + SUCCESS, payload: username })
};



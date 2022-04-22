import api from "../../utils/Api";
import handleError from "./errorHandler";
import {
    GET_TASKS,
    REQUEST,
    SUCCESS,
} from "./actionTypes";

export const getTasks = (orderData) => async (dispatch, getState) => {
    const { loading } = getState();

    if (loading) {
        return;
    };

    dispatch({ type: GET_TASKS + REQUEST });

    try {
        const order = await api.getTasks(orderData);
        dispatch({ type: GET_TASKS + SUCCESS, payload: order });
    } catch (error) {
        dispatch(handleError({ errorCode: 500, action: GET_TASKS }));
    };
};



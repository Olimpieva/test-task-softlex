import { GET_TASKS, REQUEST, SUCCESS, FAILURE, RESET_ERROR } from "../actions/actionTypes";

const initialState = {
    order: null,
    loading: false,
    error: null,
};

const currentOrder = (state = initialState, action) => {

    switch (action.type) {
        case GET_TASKS + REQUEST:
            return { ...state, loading: true, error: null };
        case GET_TASKS + SUCCESS:
            return { ...state, order: action.payload, loading: false, error: null };
        case GET_TASKS + FAILURE:
            return { ...state, order: null, loading: false, error: action.payload };
        case RESET_ERROR:
            return { ...state, error: null };
        default:
            return state;
    };
};

export default currentOrder;
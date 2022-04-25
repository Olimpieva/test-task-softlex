import { LOGIN, REQUEST, SUCCESS, FAILURE, RESET_ERROR, LOGOUT } from "../actions/actionTypes";

const initialState = {
    username: undefined,
    loading: false,
    error: null
};

const User = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN + REQUEST:
            return { ...state, loading: true, error: null };
        case LOGIN + SUCCESS:
            return { ...state, username: action.payload, loading: false, error: null };
        case LOGIN + FAILURE:
            return { ...state, username: null, loading: false, error: action.payload || null };
        case LOGOUT:
            return { ...state, username: null }
        case RESET_ERROR:
            return { ...state, error: null };
        default:
            return state;
    };
};

export default User;
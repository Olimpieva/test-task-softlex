import { availableSortDirection, availableSortFields } from "../../utils/constants";
import { GET_TASKS, REQUEST, SUCCESS, FAILURE, RESET_ERROR, SET_REQUEST_SETTINGS } from "../actions/actionTypes";

const initialState = {
    entities: null,
    totalEntitiesCount: 0,
    settings: {
        page: 1,
        sortField: availableSortFields.id,
        sortDirection: availableSortDirection.increasing
    },
    loading: false,
    error: null,
};

const Tasks = (state = initialState, action) => {

    switch (action.type) {
        case GET_TASKS + REQUEST:
            return { ...state, loading: true, error: null };
        case GET_TASKS + SUCCESS:
            return { ...state, entities: action.payload.tasks, totalEntitiesCount: action.payload.total, loading: false, error: null };
        case GET_TASKS + FAILURE:
            return { ...state, entities: null, totalEntitiesCount: 0, loading: false, error: action.payload };
        case SET_REQUEST_SETTINGS:
            const newSettings = { ...state.settings };

            for (let key in action.payload) {
                newSettings[key] = action.payload[key];
            }

            return { ...state, settings: newSettings };
        case RESET_ERROR:
            return { ...state, error: null };
        default:
            return state;
    };
};

export default Tasks;
import { availableSortDirection, availableFields } from "../../utils/constants";
import { GET_TASKS, REQUEST, SUCCESS, FAILURE, SET_REQUEST_SETTINGS, UPDATE_TASK, CREATE_TASK } from "../actions/actionTypes";

const initialState = {
    entities: null,
    totalEntitiesCount: 0,
    settings: {
        page: 1,
        sortField: availableFields.id,
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

        case CREATE_TASK + SUCCESS:
            return { ...state, entities: [action.payload, ...state.entities], loading: false, error: null };

        case CREATE_TASK + FAILURE:
            return { ...state, loading: false, error: action.payload };

        case UPDATE_TASK + SUCCESS:
            return { ...state, entities: action.payload, loading: false, error: null }

        case UPDATE_TASK + FAILURE:
            return { ...state, loading: false, error: action.payload };

        case SET_REQUEST_SETTINGS:
            return { ...state, settings: { ...state.settings, ...action.payload } };

        default:
            return state;
    };
};

export default Tasks;
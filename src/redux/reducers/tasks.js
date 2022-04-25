import { availableSortDirection, availableFields } from "../../utils/constants";
import { GET_TASKS, REQUEST, SUCCESS, FAILURE, RESET_ERROR, SET_REQUEST_SETTINGS, UPDATE_TASK, CREATE_TASK } from "../actions/actionTypes";

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
            const updatedTask = action.payload;
            const updatedTaskIndex = state.entities.findIndex((item) => item.id === updatedTask.id);
            const updatedEntities = [...state.entities.slice(0, updatedTaskIndex), updatedTask, ...state.entities.slice(updatedTaskIndex + 1)];

            console.log({ updatedEntities })

            return { ...state, entities: updatedEntities, loading: false, error: null }

        case UPDATE_TASK + FAILURE:
            return { ...state, loading: false, error: action.payload };

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
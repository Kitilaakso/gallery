/*import { CHANGE_SEARCH_FIELD } from "./constants";*/
import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_SUCCESS } from "./constants.js";

const intialState = {
    searchField: ''
}

export const searchRobots = (state = intialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state;
    }
}

/** async robots */
const intialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}
/** async request robots, muutetaan intialstate -> intialstaterobots*/
export const requestRobots = (state = intialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })

        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })

        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;

    }
}
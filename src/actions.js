import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS
} from "./constants.js";
/* async lisää nämä ylimmäiseen import { REQUEST_ROBOTS_PENDING } from "./constants.js";
import { REQUEST_ROBOTS_FAILED } from "./constants.js";*/

export const setSearchfield = (text) => ({
    //console.log(text);
    //return {
    type: 'CHANGE_SEARCH_FIELD',
    payload: text
    // }
})

/** async */
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}

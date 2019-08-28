import {
    FETCH_INVENTORY_START,
    FETCH_INVENTORY_SUCCESS,
    FETCH_INVENTORY_FAILURE,
    ADD_INVENTORY_START,
    ADD_INVENTORY_SUCCESS,
    ADD_INVENTORY_FAILURE,
    DELETE_INVENTORY_START,
    DELETE_INVENTORY_SUCCESS,
    DELETE_INVENTORY_FAILURE
} from '../Actions'

const initialState = {
    inventory: [],
    error: ''
}

function reducer(state=initialState, action) {
    console.log('reducer', action);

    switch (action.type) {
        case FETCH_INVENTORY_START:
            console.log('from reducer', action) 
            return {
                ...state
            }

        case FETCH_INVENTORY_SUCCESS:
            return {
                ...state,
                inventory: action.payload
            }

        case FETCH_INVENTORY_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case ADD_INVENTORY_START:
            return {
                ...state
            }
        case ADD_INVENTORY_SUCCESS:
            return {
                ...state,
                inventory: action.payload
            }
        case ADD_INVENTORY_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer
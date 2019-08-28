import {
    GET_USER_DATA_START,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILURE,
    
} from '../Actions'

const initialState={

    test: "It's working",
    isLoading: false,
    error: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_USER_DATA_START:
            return {
                ...state, 
                isLoading: true,
                error: ''
            }
        case GET_USER_DATA_SUCCESS:
        return {
            ...state,
            USERs: action.payload,
            isLoading: false,
            error: ''
        }
        case GET_USER_DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        
        default:
            return state
    }
}
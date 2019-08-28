const initialState = {
    inventory: [],
    error: ''
}

function reducer(state=initialState, action) {
    console.log('reducer', action);

    switch (action.type) {
        case FETCH_INVENTORY_START:
            console.log(action) 
            return {
                ...state
            }
        
        default:
            return {
                ...state
            }
    }
}
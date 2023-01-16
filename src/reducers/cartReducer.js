import { ADD_ITEM, SUBTRACT_ITEM } from "../actionTypes/actionTypes";
const initState = {
    itemCount: 0,
}

export default ( state = initState, action) => {
    // console.log('In reducers:'+action.type);
    switch(action.type){
        case ADD_ITEM:
            return {
                ...state,
                itemCount: state.itemCount + action.payload
            };
        case SUBTRACT_ITEM:
            return {
                ...state,
                itemCount: state.itemCount - action.payload,
            };
        default: 
            return state;
    }
}
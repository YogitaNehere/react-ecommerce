//Write actions here which is read by reducer
//Action Creatores: they will return the object ie simple objects
import { ADD_ITEM, SUBTRACT_ITEM } from "../actionTypes/actionTypes"
export const addItemsToCart = () => {
    // console.log("in cartActions");
    return {
        type: ADD_ITEM,
        payload: 1
    }
}

export const removeItemFromCart = () => {
    return {
        type: SUBTRACT_ITEM,
        payload: 1
    }
}
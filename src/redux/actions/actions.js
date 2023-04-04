import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes";

export const AddItemToCart = data =>({
    type:ADD_ITEM,
    payload:data,
})
export const RemoveItemToCart = index({
    type:REMOVE_ITEM,
    payload:index,
})
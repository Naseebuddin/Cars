import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes";

export const reducers = (state=[],actions) =>{
    switch(actions.type){
        case ADD_ITEM :{
            return[...state,actions.payload ]

        }
        case REMOVE_ITEM :{
            const deleteArray = actions.payload.filter((item,index) =>{
                return(index = actions.payload )
            })

        }
        default:{
            return state; 
        }
    }
}
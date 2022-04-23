// import { Action } from "history"

import { ADD_TODO, DEC_COUNT, GET_TODO, INC_COUNT, LOADING, SUCCESS } from "./actionType"


const init = {
    count:1,
    todos:{
        loading:false,
        error:false,
        data:[]
    }
}

export const Counter_reducer = (store = init,action)=>{

    switch(action.type){
        case INC_COUNT : return({...store,count:store.count+action.payload});
        case DEC_COUNT : return({...store,count:store.count-action.payload});
        case ADD_TODO : return({...store,todos:[...store.todos,action.payload]});
        case LOADING : return({...store,todos:{...store.todos,loading:true}});
        case SUCCESS :return({...store,todos:{...store.todos,loading:false}});
        case GET_TODO:return({...store,todos:{...store.todos,loading:false,data:action.payload}})



        default:
            return {...store}
        
    }

}
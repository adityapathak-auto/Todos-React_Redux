import { ADD_TODO, DEC_COUNT, GET_TODO, INC_COUNT, LOADING, SUCCESS } from "./actionType"


export const Inc_count = (payload)=>{
    return({
        type :INC_COUNT,
        payload,
    })
}

export const Dec_count = (payload)=>{
    return({
        type:DEC_COUNT,
        payload,
    })
}
export const Add_todo = (payload)=>{
    return({
        type:ADD_TODO,
        payload
    })
}

export const Loading = ()=>{
    return({
        type:LOADING
    })
}
export const Success = ()=>{
    return({
        type:SUCCESS,

    })
}
export const Get_todo = (payload)=>{
    return{
        type:GET_TODO,
        payload,
    }
}

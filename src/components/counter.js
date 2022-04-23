import { useDispatch, useSelector } from "react-redux"
import { Dec_count, Inc_count } from "../redux/action";

export const Counter = ()=>{
    const count = useSelector((store)=>store.count);
    const dispatch = useDispatch();
    

    return(<div>
        <h1>Count:{count}</h1>
        <button onClick={()=>{
            dispatch(Inc_count(1));
        }}>Add 1</button>
        <button onClick={()=>{
            dispatch(Dec_count(2));
        }}>Sub 2</button>
    </div>)
}
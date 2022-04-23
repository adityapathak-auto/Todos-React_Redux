import { useDispatch, useSelector } from "react-redux";

// import { useState } from "react/cjs/react.production.min";
import {useState} from "react";
import { Add_todo, Get_todo, Loading, Success } from "../redux/action";
import axios from "axios";
import { useEffect } from "react";




export const Todo =()=>{
 
    const todos = useSelector((store)=>store.todos);
    const dispatch = useDispatch();
    const [text,setText] = useState("");
    useEffect(()=>{
getData()
    },[])
    

    const getData = ()=>{
        axios.get("http://localhost:3001/todos").then((e)=>{
            dispatch(Get_todo(e.data));


        })
    }
    


    return(
        todos.loading?"...Loading":(
    <div>
        <input type="text" onChange={(e)=>{
            setText(e.target.value);
        }}/>
        <button onClick={()=>{
            // dispatch(Add_todo({id:Date.now(),title:text}));
            dispatch(Loading());
            axios.post("http://localhost:3001/todos",{
               title:text,
               status:false, 
            }).then(()=>{
                dispatch(Success());
                getData();
            });
            

        }}>Add Todo</button>
        {todos.data.map((e)=>{
            return(<div key={e.id}> 
                {e.title}
            </div>)
        })}
    </div>)
    )
}
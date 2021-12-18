import React,{useReducer} from 'react'
import "./style.css";


const reducer= (state,action)=>{
    if(action.type === "INCREASE" ){
        state = state + 1;
    }
    if(state>0 && action.type === "DECREASE"){
        state = state - 1;
    }
    return state;
}

const UseReducer =() => {
const initialState = 0;
    const [state, dispatch] = useReducer(reducer, initialState);
    return ( 
    <>

            <div className="center_div">
                <p> {state} </p>
                <div className="BUTTON1" onClick={()=>dispatch({type:"INCREASE"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCREASE
                </div>
                <div className="BUTTON1" onClick={()=>dispatch({type:"DECREASE"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECREASE
                </div>
                </div>
            </>
           ) 
}

export default UseReducer
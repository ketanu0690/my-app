import React,{useEffect, useState} from 'react'
import "./style.css";

function UseEffect() {
    const intialState = 0 
    const [myNum,updateNum] =useState(intialState)
    
useEffect(
    ()=>{
        document.title = `count ${myNum}`
    }
)

    return (
        <>
        <div className="center_div">
        <p> {myNum} </p>
          <div className="BUTTON1"  onClick= {()=> updateNum(myNum+1)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              INCREASE
          </div> 
          <div className="BUTTON1"  onClick= {()=>{ myNum>0? updateNum(myNum-1):updateNum(0)}}>
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

export default UseEffect

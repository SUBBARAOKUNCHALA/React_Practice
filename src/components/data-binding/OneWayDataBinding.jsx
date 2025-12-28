import React from "react";
import { useState } from "react";

export const OneWayDataBinding=()=>{
    const [num,setNum]=useState(100)
    return (
        <>
        <h1>{num}</h1>
        <button onClick={()=>{
            setNum(200)
        }}>ClickMe</button>
        </>
    )
}
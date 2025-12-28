import React from "react";
import { useState } from "react";

export const TwowayDataBinding=()=>{
    const [num,setNum]=useState(100)
    return (
        <>
        <h1>{num}</h1>
        <input type="text" onChange={(e)=>{
            setNum(Number(e.target.value))
        }}/>
        </>
    )
}
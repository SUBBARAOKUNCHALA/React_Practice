import React, { useEffect } from "react";
import { useState } from "react";
export const Useeffecthooxexplain = () => {
    const [timer, setTimer] = useState(0)
    useEffect(() => {
        console.log("use effect hook executed OutSide component")  //// IN THIS CASE IT WILL RENDER A THE TIME OF COMPONENT RENDER AND EVERY TIME OF COMPONENT RENDER
    }
    )

    useEffect(() => {
        console.log("use effect hook executed OutSide component")  //// IN THIS CASE IT WILL RENDER A THE TIME OF COMPONENT RENDER It Will  NEVER APPAER ON COMPONENT RERENDER
    }, []
    )

    useEffect(() => {
        console.log("use effect hook executed OutSide component")  //// IN THIS CASE IT WILL RENDER A THE TIME OF COMPONENT RENDER AND IT WILL RENDER AFTER ITS DEPENDENCY VARIABLE CHANGED EX:- TIMER IN THIS CODE  
    }, [timer]
    )


    return (
        <>
            <h1>USE EFFECT HOOK EXPLAIN</h1>
            <h3>{timer}</h3>
            {console.log("use effect hook executed inside component")}
            <button onClick={() => {
                setTimer(timer + 1)
            }} >UpdateHookTime</button>
        </>
    )
}
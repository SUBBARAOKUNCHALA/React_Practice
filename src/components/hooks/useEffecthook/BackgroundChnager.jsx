import React, { useEffect } from "react";
import { useState } from "react";

export const BackgroundChanger = () => {
    const [color, setNewcolor] = useState("")
    useEffect(()=>{
        document.body.style.backgroundColor=color
    },[color])
    return (
        <>
            <div>
                <h1>Background Color Changer</h1>
                <input type="color" onChange={(e) => {
                    setNewcolor(e.target.value)
                }} />
            </div>
        </>
    )
}
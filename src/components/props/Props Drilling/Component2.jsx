import React from "react";
import './Component1.css'
import { Component3 } from "./component3";

export default function Component2({isAdmin}) {
    return (
        <>
            <div style={{
                background: "yellow",
                padding: "30px",
                fontSize: "20px",
                border: "5px solid red",
            }}>
                COMPONENT 2:- IS ALIVE With Out Connection of Prop But In The Chain
            </div>
            <div className="component2-wrapper">
                <Component3 isAdmin={isAdmin} />
            </div>
        </>
    );

}

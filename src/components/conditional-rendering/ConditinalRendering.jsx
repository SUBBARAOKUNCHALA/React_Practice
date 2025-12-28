import React from "react";
import './ConditinalRendering.css'
import { useState } from "react";

export const Mywebpage = () => {
    const [isLogin, setLogin] = useState(false)
    return (
        <>
            <ul className="navbar">
                <li>Home</li>
                <li>About Us</li>
                <li>Cantact Us</li>
                {isLogin ? <li>Logout</li> : <li>Login</li>}
            </ul>
            <button
                className="login-btn"
                onClick={() => setLogin(!isLogin)}
            >
                {isLogin ? "Logout" : "Login"}
            </button>

            {isLogin ? <h1>Well Come To My Dash-Board</h1> : <h1>Please CLick On Login </h1>}
        </>
    )
}
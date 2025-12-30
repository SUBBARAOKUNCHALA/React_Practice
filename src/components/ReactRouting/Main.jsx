import React from "react";
import { useState } from "react";
import './Routing.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Login } from "./Login";
import { DashBoard } from "./Dashboard";

export const Customerouting = () => {
    return (
        <>
            <BrowserRouter>
                {/* Navbar */}
                <div className="Navbar">
                    <ul>
                        {/* <li><Link to="/">DashBoard</Link></li> */}
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>

                {/* Page Content */}
                <div className="content">
                    <Routes>
                        <Route path="/" element={<DashBoard />}></Route>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
import React, { useState, useEffect } from "react";
import "./Component1.css";
import Component2 from "./Component2";

export const Component1 = ({ data }) => {
  const [login, setLogin] = useState(data);

  const handleChange = (e) => {
    setLogin(e.target.checked);
  };

  useEffect(() => {
    console.log("isAdmin:", login);
  }, [login]);

  return (
    <>
    <div className="admin-card">
        <p>I am COmponent One Passing Flag to Component2 and COmponent 3</p>
      <label className="admin-toggle">
        <input
          type="checkbox"
          checked={login}
          onChange={handleChange}
        />
        <span className="slider"></span>
        <span className="label-text">Is Admin Login</span>
      </label>

      <p className={`status ${login ? "active" : "inactive"}`}>
        {login ? "Admin Mode Enabled" : "Admin Mode Disabled"}
      </p>
    </div>
    <div className="component2-wrapper">
        <Component2 isAdmin={login} />
      </div>
    </>
    
  );
};

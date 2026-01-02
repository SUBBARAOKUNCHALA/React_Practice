// import React from "react";
// import { useState } from "react";
// import './Forms.css'

// export const Recatforms = () => {
//     const [userName, setUserName] = useState("")
//     const [password, setPassword] = useState("")
//     const [Confirmpassword, setConformPassword] = useState("")
//     const Validation=()=>{

//         if(userName==="" || password ==="" || Confirmpassword===""){
//             return (alert("All Fields Need To Be Required"))
//         }
//         else if(password!==Confirmpassword){
//             return (alert("Confirmpassword is Not match with password"))
//         }else if(password.length<6){
//             return (alert("Password Should'be mor than 6 letters"))
//         }else{
//             return (alert("User Data Saved Succefully"))
//         }
//     }
//     return (
//         <>
//             <div className="container-fluid">
//                 <form action="">
//                     <div className="label">
//                         <label htmlFor="name">Name:-</label>
//                         <input type="text" className="input" placeholder="Enter Name" onChange={(e) => {
//                             setUserName(e.target.value)
//                         }} />
//                     </div>
//                     <div className="password">
//                         <label htmlFor="password">Password:-</label>
//                         <input type="password" className="input" placeholder="Enter password" onChange={(e) => {
//                             setPassword(e.target.value)
//                         }} />
//                     </div>
//                     <div className="Confirmpassword">
//                         <label htmlFor="Confirmpassword">Confirmpassword:-</label>
//                         <input type="password" className="input" placeholder="Enter password" onChange={(e) => {
//                             setConformPassword(e.target.value)
                            
//                         }} />
//                     </div>
//                     <div className="button">
//                         <button type="button" className="button" onClick={Validation} >Save</button>
//                     </div>
//                 </form>

//             </div>
//         </>
//     )
// }/



import React, { useState } from "react";
import "./Forms.css";

export const Recatforms = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes (reactive)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.userName.trim()) {
      newErrors.userName = "Name is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("User Data Saved Successfully ✅");
      console.log("Form Data:", formData);

      // reset form
      setFormData({
        userName: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="label">
          <label>Name:</label>
          <input
            type="text"
            name="userName"
            className="input"
            placeholder="Enter Name"
            value={formData.userName}
            onChange={handleChange}
          />
          {errors.userName && <span className="error">{errors.userName}</span>}
        </div>

        {/* Password */}
        <div className="password">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        {/* Confirm Password */}
        <div className="Confirmpassword">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            className="input"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>

        {/* Button */}
        <div className="button">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

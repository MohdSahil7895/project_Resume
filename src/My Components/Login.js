import React, { useState } from "react";
import {
    Link
  } from "react-router-dom";
import "./loginpage.css";
export const Login = () => {
   
    let h3style={
        display: 'flex',  justifyContent:'center', alignItems:'center',}
    
        const [user, setUser] = useState({
            email: "",
            password: "",
          });
        
          const handleChange= e =>{
        
            const {name,value}=e.target
            setUser({
                ...user,
                [name]:value
            })
  return (
    <>
    <div className="login container p-3 my-3  center">
   <form>
    <h3 style={h3style}>Portfolio</h3><br/><br/>
    <label className="form-label" htmlFor="form2Example1">Email address</label>
    <input type="email" name="email" value={user.email} onChange={handleChange} id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">Password</label>
    <input type="password" name="password" value={user.password} onChange={handleChange} id="form2Example2" className="form-control" />   
    <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
    <a href="#!">Forgot password?</a>
    <p>Not a member? <Link to="/SignUp">Sign Up</Link></p>
  </form></div>
</>
    
  )
}
}
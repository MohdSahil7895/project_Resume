import React from 'react'
import {
    Link
  } from "react-router-dom";
export const Login = () => {
    let loginstyle={
    padding:"50px",
    margin: "auto",
    alignItems: 'center',
    justifyContent:'center',
    height:"50%",
    width:"50%",
    border:"1px solid black",
    paddingTop: '50%',
    }
    let h3style={
        display: 'flex',  justifyContent:'center', alignItems:'center',}
    
  return (
    <>
   <form  className="container p-3 my-3  center" style={loginstyle} >
    {/* <!-- Email input --> */}<h3 style={h3style}>Portfolio</h3><br/><br/>
    <div className="form-outline mb-4">
      <input type="email" id="form2Example1" className="form-control" />
      <label className="form-label" htmlFor="form2Example1">Email address</label>
    </div>
  


    {/* <!-- Password input --> */}
    <div className="form-outline mb-4">
      <input type="password" id="form2Example2" className="form-control" />
      <label className="form-label" htmlFor="form2Example2">Password</label>
    </div>
      {/* <!-- Submit button --> */}
      <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
      <div className="col d-flex justify-content-center">
      </div>
      <div className="col " >
        {/* <!-- Simple link --> */}
        <a href="#!">Forgot password?</a>
      </div>
    {/* <!-- Register buttons --> */}
    <div className="text-center">
  
      <p>Not a member? <Link to="/SignUp">Sign Up</Link></p>
  
    </div>
  </form>
</>
    
  )
}

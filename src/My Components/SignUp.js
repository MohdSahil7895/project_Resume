import React, { useState } from "react";
import "./loginpage.css";
import { Link } from "react-router-dom";
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    last: "",
    email: "",
    password: "",
  });

  const handleChange= e =>{

    const {name,value}=e.target
    setUser({
        ...user,
        [name]:value
    })
  }

  const signUp =() =>{
    const {name,last,email,password}= user
    if( name && last && email && password ){
        axios.post("http://localhost:9002/SignUp", user)
        .then( res => {
            alert(res.data.message)
            navigate('/login');
        })
    } else {
        alert("invalid input")
    }
    
}
  
  return (
    <>
      <div className="login container p-3 my-3  center">
        {/* <div className="container"></div>
    <h1>Please Sign Up Here</h1> */}
        <form>
          <h3>Sign Up</h3>
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            maxlength="10"
            name="name"
            value={user.name}
          />

          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            maxlength="10"
            name="last"
            value={user.last}
          />

          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            maxlength="32"
            name="email"
            value={user.email} onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
            pattern="[a-zA-Z0-9]+"
            minlength="8"
            maxlength="15"
            name="password"
            value={user.password}
          />

          <button type="submit" className="btn btn-primary" onClick={signUp}>
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="/">sign in?</Link>
          </p>
        </form>
      </div>
    </>
  );
};

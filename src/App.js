import "./App.css";
import Header from "./My Components/Header";
import { Footer } from "./My Components/Footer";
import { Login } from "./My Components/Login";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { About } from "./My Components/About";
import { Home } from "./My Components/Home";
import { SignUp } from "./My Components/SignUp";
function App() {
  return (
    <>
      <Router>
        <Header title="React App 1" />


        <Routes>
          <Route exact path="/About"  element={<About />}  />
        
          <Route exact path="/" element={<Login />}  />
      
          <Route exact path="/SignUp"  element={<SignUp />} />
          <Route exact path="/Home"  element={<Home />} />
              
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

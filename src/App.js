import "./App.css";
import Header from "./My Components/Header";
import { Footer } from "./Footer";
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

function App() {
  return (
    <>
      <Router>
        <Header title="React App 1" />


        <Routes>
          <Route exact path="/About"  element={<About />}  />
          
          <Route exact path="/" element={<Login />}  />
          

          <Route exact path="/home"  element={<Login />} />
              
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

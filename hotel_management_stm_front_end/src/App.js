import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Buttonpage from "./components/Buttonpage";
import Signin from "./components/SigninPages/Signin";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="loginpage" exact element={<Buttonpage />} />
          <Route path="Signin" exact element={<Signin />} />
          <Route path="dashboard" exact element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

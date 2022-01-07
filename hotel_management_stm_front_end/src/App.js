import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Buttonpage from "./components/Buttonpage";
import AdminSignin from "./components/SigninPages/adminSignin";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="loginpage" exact element={<Buttonpage />} />
          <Route path="adminsignin" exact element={<AdminSignin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "../../App.css";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [values, setValues] = useState();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleRoute = () => {
    let obj = {};
    localStorage.setItem("myvalues", JSON.stringify(obj));

    navigate("/vehicles");
    return;
  };

  return (
    <div className="hero-container">
      <h1>BOOK YOUR ROOM</h1>
      <p>What are you waiting for?</p>
      <label className="form-lable_h4">Search</label>

      <div className="input-group">
        <input
          className="form-control2"
          type="text"
          placeholder="Type of Room"
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button onClick={handleRoute} className="btn btn-primary">
            Go!{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />;
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-8">
          <div className="card2-body">
            <br />
            <br />
            <br />

            <Link to="/signin" className="form-input-btn2">
              Admin
            </Link>

            <br />
            <br />
            <button className="form-input-btn2" type="booknow">
              Receptionist
            </button>
            <br />
            <br />
            <button className="form-input-btn2" type="booknow">
              Customer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

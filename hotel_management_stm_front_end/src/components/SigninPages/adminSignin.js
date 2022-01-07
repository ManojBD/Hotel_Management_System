import React from "react";

import "../../App.css";

function SignIn() {
  return (
    <>
      <div className="row">
        <h1>Sign in to your account by filling out the information below.</h1>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="form-input-btn">
          Sign In
        </button>
        <span className="form-input-login">
          Haven't an account? SignUp <a href="Sign-up">here</a>
        </span>
      </div>
    </>
  );
}

export default SignIn;

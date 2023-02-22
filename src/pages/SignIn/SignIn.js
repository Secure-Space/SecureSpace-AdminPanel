import React from "react";
import { Link } from "react-router-dom";

import "./SignIn.scss";

import Logo from "../../images/translogo.png";

const SignIn = () => {
  return (
    <div className="SignIn">
      <div className="container">
        <div className="logocontain">
          <img src={Logo} alt="" className="logo" />
        </div>
        {/* form begins */}
        <div className="form">
          <form>
            <div>
              <input
                type="email"
                placeholder="Enter your email-id"
                className="input"
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className="input"
              ></input>
            </div>
            <div className="buttoncontain">
              <button className="button">Sign In</button>
            </div>
          </form>
          <div>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="redirect">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

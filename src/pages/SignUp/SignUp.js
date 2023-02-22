import React from 'react';
import { Link } from 'react-router-dom';

import "./SignUp.scss";

import Logo from "../../images/translogo.png";


const SignUp = () => {
  return (
<div className="SignUp">
      <div className="container">
        <div className="logocontain">
          <img src={Logo} alt="" className="logo" />
        </div>
        {/* form begins  */}
        <div className="form">
            <form>
            <div >
                <input type="text" placeholder="Enter your name" className="input"></input>
                </div>
                <div >
                <input type="email" placeholder="Enter your email-id" className="input"></input>
                </div>
                <div>
                <input type="password" placeholder="Enter your password" className="input"></input>
                </div>
                <div>
                <input type="password" placeholder="Re-enter your password" className="input"></input>
                </div>
                <div className="buttoncontain">
                <button className="button">Sign Up</button>
                </div>
            </form>
            <div>
            <p>
                Already have an account? <Link to='/' className="redirect">Sign In</Link>
            </p>
            </div>
        </div>
      </div>
    </div>
      )
}

export default SignUp
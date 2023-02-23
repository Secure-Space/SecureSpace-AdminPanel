import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import "./SignIn.scss";

import Logo from "../../images/translogo.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignedIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // const displayMessage = 'Email or Password incorrect'
      });
  };
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
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className="input"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              {/* <div>
                {displayMessage}
              </div> */}
            </div>
            <div className="buttoncontain">
              <button className="button"
               onClick={SignedIn}
              >Sign In</button>
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

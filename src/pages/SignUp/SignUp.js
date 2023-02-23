import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import "./SignUp.scss";

import Logo from "../../images/translogo.png";

const SignUp = () => {

const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="SignUp">
      <div className="container">
        <div className="logocontain">
          <img src={Logo} alt="" className="logo" />
        </div>
        {/* form begins  */}
        <div className="form">
          <form>
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                className="input"
              ></input>
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your email-id"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="input"
              ></input>
            </div>
            <div className="buttoncontain">
              <button className="button"
               onClick={onSubmit} 
              >Sign Up</button>
            </div>
          </form>
          <div>
            <p>
              Already have an account?{" "}
              <Link to="/" className="redirect">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

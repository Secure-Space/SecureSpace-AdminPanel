import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/firebase";

import "./SignUp.scss";

import Logo from "../../images/translogo.png";

const SignUp = () => {
  // const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signupUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    // console.log(data);
    if(data.status === 'ok'){
      window.location.href = '/signin'
    }
  }

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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                id="password"
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
                id="password_confirm"
                className="input"
              ></input>
            </div>
            <div className="buttoncontain">
              <button className="button" onClick={signupUser}>
                Sign Up
              </button>
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

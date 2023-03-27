import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/firebase";

import "./SignIn.scss";

import Logo from "../../images/translogo.png";

const SignIn = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signinUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/api/signin", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    // console.log(data);
    if(data.user){
      localStorage.setItem('token', data.user)
      window.location.href = '/home'
    }
    else{
      alert('Email or password incorrect!')
    }
  }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className="input"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              {/* <div>
                {displayMessage}
              </div> */}
            </div>
            <div className="buttoncontain">
              <button className="button" onClick={signinUser}>
                Sign In
              </button>
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

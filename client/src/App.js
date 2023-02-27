import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";

import "./App.css";

import "@fontsource/ubuntu";

// page imports
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

import Home from "./pages/home/Home";
import Feed from "./pages/feed/Feed";
import Notification from "./pages/notification/Notification";
import Profile from "./pages/profile/Profile";

function App() {

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          console.log("user is logged out")
        }
      });
     
}, [])
  return (
    <div className="App">
      <div className="DashBoard">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/notif" element={<Notification />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

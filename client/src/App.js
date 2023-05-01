import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import "@fontsource/ubuntu";

// page imports
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

import Home from "./pages/home/Home";
import Feed from "./pages/feed/Feed";
import Notification from "./pages/notification/Notification";
import Profile from "./pages/profile/Profile";

import Upload from "./pages/UploadImage/Upload";
import Faces from "./pages/Faces/Faces";

function App() {
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
              <Route path="/upload" element={<Upload />} />
              <Route path="/faces" element={<Faces />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import {Link} from 'react-router-dom';

import "./SideBar.scss";

import Logo from "../../images/translogo.png";

import {
  UilEstate,
  UilVideo,
  UilBell,
  UilUser,
  UilSignout,
} from "@iconscout/react-unicons";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="top">
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className="contents">
        <ul>
        <Link to="/home" className="link">
          <li>
            <UilEstate />
            <span className="text">Home</span>
          </li>
          </Link>
          <Link to="/feed" className="link">
          <li>
            <UilVideo />
            <span className="text">Feed</span>
          </li>
          </Link>
          <Link to="/notif" className="link">
          <li>
            <UilBell />
            <span className="text">Notifications</span>
          </li>
          </Link>
          <Link to="/profile" className="link">
          <li>
            <UilUser />
            <span className="text">Profile</span>
          </li>
          </Link>
          <li>
            <UilSignout />
            <span className="text">Sign Out</span>
          </li>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default SideBar;

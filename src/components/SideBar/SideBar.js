import React from "react";

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
          <li>
            <UilEstate />
            <span className="text">Home</span>
          </li>
          <li>
            <UilVideo />
            <span className="text">Feed</span>
          </li>
          <li>
            <UilBell />
            <span className="text">Notification</span>
          </li>
          <li>
            <UilUser />
            <span className="text">Profile</span>
          </li>
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

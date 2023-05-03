import React from "react";
import { Link } from 'react-router-dom';
import "./SideBar.scss";
import {motion} from 'framer-motion'

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
            <motion.span className="text"
              whileHover={{scale:1.1}}
            >Home</motion.span>
          </li>
          </Link>
          <Link to="/feed" className="link">
          <li>
            <UilVideo />
            <motion.span className="text"
              whileHover={{scale:1.1}}
            >Feed</motion.span>
          </li>
          </Link>
          <Link to="/notif" className="link">
          <li>
            <UilBell />
            <motion.span className="text"
              whileHover={{scale:1.1}}
            >Notifications</motion.span>
          </li>
          </Link>
          <Link to="/profile" className="link">
          <li>
            <UilUser />
            <motion.span className="text"
              whileHover={{scale:1.1}}
            >Profile</motion.span>
          </li>
          </Link>
          <Link to="/" className="link">
          <li>
            <UilSignout />
            <motion.span className="text"
              whileHover={{scale:1.1}}
            >Sign Out</motion.span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default SideBar;

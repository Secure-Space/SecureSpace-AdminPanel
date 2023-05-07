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
          <motion.li
          whileHover={{fontSize:'25px'}}>
            <UilEstate />
            <span className="text"
              
            >Home</span>
          </motion.li>
          </Link>
          <Link to="/feed" className="link">
          <motion.li
          whileHover={{fontSize:'25px'}}>
            <UilVideo />
            <span className="text"
              // whileHover={{scale:1.1}}
            >Feed</span>
          </motion.li>
          </Link>
          <Link to="/notif" className="link">
          <motion.li
          whileHover={{fontSize:'25px'}}>
            <UilBell />
            <span className="text"
              // whileHover={{scale:1.1}}
            >Notifications</span>
          </motion.li>
          </Link>
          <Link to="/profile" className="link">
          <motion.li
          whileHover={{fontSize:'25px'}}>
            <UilUser />
            <span className="text"
              // whileHover={{scale:1.1}}
            >Profile</span>
          </motion.li>
          </Link>
          <Link to="/" className="link">
          <motion.li
          whileHover={{fontSize:'25px'}}>
            <UilSignout />
            <span className="text"
              // whileHover={{scale:1.1}}
            >Sign Out</span>
          </motion.li>
          </Link>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default SideBar;

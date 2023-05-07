// import { useState } from "react";

import {motion} from 'framer-motion'

import "./Feed.scss";


import SideBar from "../../components/SideBar/SideBar";

const Feed = () => {
  

  return (
    <motion.div className="Feed">
      <SideBar />
      <div className="container">
        <h1 className="title">Feed</h1>
      <motion.div className="contentcontainer"
      initial={{opacity:0, }}
      animate={{opacity:1, }}
      // transition={{duration:1}}
      >
          <div className="row1">
            <div className="Calcontainer">
              <div className="subtitle">
                Calendar
              </div>
              
            </div>
            <div className="Surveicontainer">
              <div className="subtitle">
                Surveillance
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="subtitle">
              User Activities
            </div>
            <div className="ActBar">ACTIVITY CHART</div>
           
          </div>
      </motion.div>
        </div>
    </motion.div>
  );
};

export default Feed;

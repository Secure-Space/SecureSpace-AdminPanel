import React, {useState, useEffect} from "react";
import {motion} from 'framer-motion'

import "./Profile.scss";

import SideBar from "../../components/SideBar/SideBar";

const Profile = () => {
  // const [userData, setUserData] = useState('');
  const [uname, setUname] = useState('')
  const [uemail, setUemail] = useState('')
  async function displayProfile(){
    const response  = await fetch('http://localhost:8000/api/profile',{
    headers: {
      'x-access-token':localStorage.getItem('token'),
    }
    })
    const data = await response.json()
    if(data.status === 'ok'){
      setUname(data.name)
      setUemail(data.email)
    }
    else{
      alert(data.error)
    }
  }

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      displayProfile()
    }
  },[])
  return (
    <div className="Profile">
      <SideBar />
      <div className="container">
        <h1 className="title">Profile</h1>
      <motion.div className="contentcontainer"
      initial={{opacity:0, }}
      animate={{opacity:1, }}
      >
          <div className="row1">
            <div className="Ppic"></div>
            <div className="PName">
              {uname}
            </div>
          </div>
          <div className="row2">
            <div className="Pdetails">
              <text className="Ptitle">PERSONAL DETAILS</text>
              <text>Name: {uname}</text>
              <text>Age:</text>
              <text>Gender:</text>
              <text>Address:</text>
              <text>Phone No:</text>
              <text>Email Id: {uemail}</text>
            </div>
            <div className="Econtact">
              <text className="Etitle">EMERGENCY CONTACTS</text>
              </div>
          </div>
      </motion.div>
        </div>
    </div>
  );
};

export default Profile;

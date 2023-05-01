import { useState, useEffect } from "react";
import { UilUpload, UilHeadSide } from '@iconscout/react-unicons'
import { Link } from "react-router-dom";

import "./Home.scss";

import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  const [uname, setUname] = useState('')
  async function displayProfile(){
    const response  = await fetch('http://localhost:8000/api/profile',{
    headers: {
      'x-access-token':localStorage.getItem('token'),
    }
    })
    const data = await response.json()
    if(data.status === 'ok'){
      setUname(data.name)
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
    <div className="Home">
      <SideBar />
      <div className="container">
       <h1 className="title">Home</h1>
        <div className="contentcontainer">
          Welcome back, {uname}
          <div className="row1">
            <Link to="/upload" className="redirect">
            <div className="item">
              <UilUpload className="icon"></UilUpload>
              Upload
            </div>
            </Link>
            <Link to="/faces" className="redirect">
            <div className="item">
              <UilHeadSide className="icon"></UilHeadSide>
              Trusted Faces
            </div>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import { UilUpload, UilHeadSide } from '@iconscout/react-unicons'
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import Calendar from "react-calendar";
import { PieChart } from "react-minimal-pie-chart";

import "./Home.scss";
import "./Calendar.css";

import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  const [date, setDate] = useState(new Date());
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
    <motion.div className="Home"
      // animate={{boxShadow:"0px 0px 7px rgb(255,255,255)"}}
    >
      <SideBar />
      <div className="container">
      
       <h1 className="title">Home</h1>
        <motion.div className="contentcontainer"
        initial={{opacity:0, }}
        animate={{opacity:1,}}
        >
          <span style={{fontSize:'24px'}}>
          Welcome, {uname}
          </span>
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
          <div className="row2">
            <div>
          <Calendar onChange={setDate} value={date} />
          </div>
          
          <div className="ActPie">
              <PieChart className="Pie"
                data={[
                  { title: "Locked", value: 10, color: "#FFF" },
                  { title: "Authorised", value: 15, color: "#FFC977" },
                  { title: "Supervised", value: 20, color: "#FF9D43" },
                ]}
                startAngle={0}
                lengthAngle={360}
                lineWidth={30}
              />
            </div>
          
          </div>
        </motion.div>
      </div>
      
    </motion.div>
  );
};

export default Home;

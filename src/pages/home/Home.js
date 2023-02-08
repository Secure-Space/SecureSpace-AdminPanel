import { useState } from "react";
import Calendar from "react-calendar";

import "./Home.scss";
import "./Calendar.css";

import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="Home">
      <SideBar />
      <div className="container">
        <h1 className="title">Home</h1>
        <div className="contentcontainer">
        <div className="row1">
          <div className="Calcontainer">
            <div className="subtitle">
              <text>Calendar</text>
            </div>
            <Calendar onChange={setDate} value={date} />
          </div>
         <div className="Surveicontainer">
         <div className="subtitle">
              <text>Surveillance</text>
            </div>
         </div>
        </div>
        <div className="row2">
        <div className="subtitle">
              <text>User Activities</text>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;

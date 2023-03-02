import { useState } from "react";
import Calendar from "react-calendar";
import { PieChart } from "react-minimal-pie-chart";

import "./Feed.scss";
import "./Calendar.css";

import SideBar from "../../components/SideBar/SideBar";

const Feed = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="Feed">
      <SideBar />
      <div className="container">
        <h1 className="title">Feed</h1>
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
            <div className="ActBar">ACTIVITY CHART</div>
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
        </div>
      </div>
    </div>
  );
};

export default Feed;

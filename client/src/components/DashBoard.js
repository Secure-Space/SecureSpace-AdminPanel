import React from "react";
import './DashBoard.css'

import SideBar from "./SideBar";
import MainBar from "./MainBar";


function DashBoard(){
    return(
    <div className='DashBoard'>
    <div>
        <SideBar/>
    </div>
    <div>
        <MainBar/>
    </div>
  </div>
    )
}

export default DashBoard;
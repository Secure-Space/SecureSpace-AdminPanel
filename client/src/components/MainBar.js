import React from "react";
import './MainBar.css';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MainBar(){
    return(
        <div className="MainBar">
            <h1>Home</h1>
            <div className="Cal">
            <Calendar/>
            </div>
        </div>
    )
}

export default MainBar;
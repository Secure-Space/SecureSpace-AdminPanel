import { useState } from 'react';
import './SideBar.css';

import {UilSignout} from "@iconscout/react-unicons";

import Logo from '../images/translogo.png';

import { SidebarData } from '../Data/Data';


function SideBar(){

    const[selected,setSelected] = useState(0);

    return(
        <div>
        <div className="List">
            <img src = {Logo} alt = '' className='Logo'/>
            <div className='Menu'>
                {SidebarData.map((item, index)=>{
                    return(
                        <div className='MenuItem'>
                        <div className={selected===index? 'active': ''}
                        key = {index}
                        onClick={()=>setSelected(index)}
                        >
                            <item.icon/>
                            {item.heading}
                        </div>
                        </div>
                    )
                    })}
                    <div className='LogOut'>
                        <UilSignout/>
                    </div>
            </div>
            
            
        </div>
        </div>
    )
}

export default SideBar;
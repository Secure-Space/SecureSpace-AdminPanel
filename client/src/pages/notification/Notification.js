import React from 'react';
import {motion} from 'framer-motion'

import './Notification.scss';

import SideBar from '../../components/SideBar/SideBar';

const Notification = () => {
  return (
    <div className='Notification'>
      <SideBar/>
      <div className='container'>
        <h1 style={{fontSize: '40px'}}>Notifications</h1>
      <motion.div className='contentcontainer'
      initial={{opacity:0, }}
      animate={{opacity:1, }}>
          {/* new box */}
          <div className='NotifBox'>
          <text className='time'>Today</text>
          <div className='NotifContain'>Notification</div>
          </div>
          {/* new box */}
          <div className='NotifBox'>
          <text className='time'>Yesterday</text>
          <div className='NotifContain'>Notification</div>
          </div>
          {/* new box */}
          <div className='NotifBox'>
          <text className='time'>Last Week</text>
          <div className='NotifContain'>Notification</div>
          </div>
          {/* new box */}
          <div className='NotifBox'>
          <text className='time'>Miscellaneous</text>
          <div className='NotifContain'>Notification</div>
          </div>
      </motion.div>
        </div>
    </div>
  )
}

export default Notification
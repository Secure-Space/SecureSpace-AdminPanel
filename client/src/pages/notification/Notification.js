import React from 'react';
import {motion} from 'framer-motion'

import './Notification.scss';

import SideBar from '../../components/SideBar/SideBar';

const Notification = () => {
  return (
    <div className='Notification'>
      <SideBar/>
      <motion.div className='container'
      initial={{opacity:0.5, }}
      animate={{opacity:1, }}>
        <h1>Notifications</h1>
        <div className='contentcontainer'>
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
        </div>
      </motion.div>
    </div>
  )
}

export default Notification
import React from 'react';

import './Notification.scss';

import SideBar from '../../components/SideBar/SideBar';

const Notification = () => {
  return (
    <div className='Notification'>
      <SideBar/>
      <div className='container'>
        <h1>Notifications</h1>
        <div className='contentcontainer'>
          <div className='NotifBox'>
          <text>Today</text>
          <div className='NotifContain'>sad</div>
          </div>
          <div className='NotifBox'>
          <text>Yesterday</text>
          <div className='NotifContain'>sad</div>
          </div>
          <div className='NotifBox'>
          <text>Last Week</text>
          <div className='NotifContain'>sad</div>
          </div>
          <div className='NotifBox'>
          <text>Miscellaneous</text>
          <div className='NotifContain'>sad</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification
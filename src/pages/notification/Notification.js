import React from 'react';

import './Notification.scss';

import SideBar from '../../components/SideBar/SideBar';

const Notification = () => {
  return (
    <div className='Notification'>
      <SideBar/>
      <div className='container'>
        <h1>Notifications</h1>
      </div>
    </div>
  )
}

export default Notification
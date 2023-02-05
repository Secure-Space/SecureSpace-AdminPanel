import React from 'react';

import './Profile.scss';

import SideBar from '../../components/SideBar/SideBar';

const Profile = () => {
  return (
    <div className='Profile'>
      <SideBar/>
      <div className='container'>
        <h1>Profile</h1>
      </div>
    </div>
  )
}

export default Profile
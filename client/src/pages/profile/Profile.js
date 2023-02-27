import React from 'react';

import './Profile.scss';

import SideBar from '../../components/SideBar/SideBar';

const Profile = () => {
  return (
    <div className='Profile'>
      <SideBar/>
      <div className='container'>
        <h1 className='title'>Profile</h1>
        <div className='contentcontainer'>
          <div className='row1'>

          </div>
          <div className='row2'>
            <div className='Pdetails'>
            <ul>
              <li>
                PERSONAL DETAILS
              </li>
              <li>
                First Name
              </li>
              <li>
                Last Name
              </li>
              <li>
                Age
              </li>
            </ul>
            </div>
            <div className='Econtact'>
            EMERGENCY CONTACTS
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
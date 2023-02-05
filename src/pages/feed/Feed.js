import React from 'react';

import './Feed.scss';

import SideBar from '../../components/SideBar/SideBar';

const Feed = () => {
  return (
    <div className='Feed'>
      <SideBar/>
      <div className='container'>
        <h1>Feed</h1>
      </div>
    </div>
  )
}

export default Feed
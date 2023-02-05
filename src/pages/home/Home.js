import React from 'react';

import './Home.scss';

import SideBar from '../../components/SideBar/SideBar';

const Home = () => {
  return (
    <div className='Home'>
        <SideBar/>
        <div className='container'>
            <h1>Home</h1>
        </div>
    </div>
  )
}

export default Home
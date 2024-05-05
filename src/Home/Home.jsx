import React from 'react'
import './Home.scss';
import { DashBoard, Header, Sidebar } from '../components';


const Home = () => {
  return (
    <div className='Home'>
      <Sidebar />
      <div className='Main'>
        <Header />
        <DashBoard />
      </div>
    </div>
  )
}

export default Home
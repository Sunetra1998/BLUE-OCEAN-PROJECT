import React from 'react'
import './UserManagement.scss';
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header/Header';

const UserManagement = () => {
  return (
    <div className='UserManagement'>
      <Sidebar />
      <div className='Main'>
        <Header />
        UserManagement
      </div>
    </div>
  )
}

export default UserManagement
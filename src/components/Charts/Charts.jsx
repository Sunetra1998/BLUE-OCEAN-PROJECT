import React from 'react'
import './Charts.scss';
import Header from '../Header/Header';
import Sidebar from '../sidebar/Sidebar';

const Charts = () => {
    return (
        <div className='Charts'>
            <Sidebar />
            <div className='Main'>
                <Header />
                Charts
            </div>
        </div>
    )
}

export default Charts
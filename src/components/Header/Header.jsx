import React from 'react'
import './Header.scss';
import { HiOutlineBell } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
    return (
        <div className='Header'>
            <div className='icon'>
                <HiOutlineBell size="1.25rem" />
            </div>
            <div className='icon'>
                <VscAccount size="1.25rem" />
            </div>
        </div>
    )
}

export default Header
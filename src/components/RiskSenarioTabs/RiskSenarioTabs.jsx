import React, { useState } from 'react'
import './RiskSenarioTabs.scss';
import "bootstrap/dist/css/bootstrap.min.css";

const RiskSenarioTabs = () => {
    const [toggle, setToggle] = useState(1);
    const updateToggle=(id)=>{
        setToggle(id);
    }
  return (
    <div className='tab'>
   <ul className='d-flex'>
    <li className='flex-fill' onClick={()=>updateToggle(1)}>Likelihood Score</li>
    <li className='flex-fill' onClick={()=>updateToggle(2)}>Bussiness Impact</li>
   </ul>
    <div className={toggle == 1 ? "show-content" : "content"}>
    <h1>Likelihood Score</h1>
    </div>
    <div className={toggle == 2 ? "show-content" : "content"}>
    <h1>Bussiness Impact</h1>
    </div>
    </div>
  )
}

export default RiskSenarioTabs
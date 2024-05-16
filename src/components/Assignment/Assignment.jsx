import React, { useState } from 'react'
import './Assignment.scss';
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header/Header';
import CustomInput from '../Custominput/CustomInput';
import { FaCheckCircle } from "react-icons/fa";
import RiskSenarioTabs from '../RiskSenarioTabs/RiskSenarioTabs';

const Assignment = () => {

    return (
      <div className='Assignment'>
        <Sidebar />
        <div className='Main'>
          <Header />
          <div className='Main-Section'>
            <section className='Section-left'>
              <div className='Header-Section'>
                <h3>Risk Senarios (1/7)</h3>
              </div>
              <table>
                <tbody>
                  <tr className='TableRow1'>
                    <td style={{ width: "30%" }}>
                      <CustomInput
                        label="Search"
                        type="search"
                        name="search"
                        placeholder="Search by keywords"
                      />
                    </td>
                    <td style={{ width: "25%" }}>Likelihood Score</td>
                    <td style={{ width: "25%" }}>Business Impact</td>
                  </tr>
                  <tr className='TableRow2'>
                    <td style={{ width: "40%" }}>
                      <strong>Confidently of system ABC is <br />compromised. <span>view less</span></strong>
                    </td>
                    <td style={{ width: "25%" }}><FaCheckCircle size="1.25rem" className='icon' /></td>
                    <td style={{ width: "25%" }}><FaCheckCircle size="1.25rem" className='icon' /></td>
                  </tr>
                  <tr>
                    <td style={{ width: "40%" }}>
                      <strong className='graycolumn'>Integrity of data stored in system...<span>view more</span></strong>
                    </td>
                    <td style={{ width: "25%" }}><FaCheckCircle size="1.25rem" /></td>
                    <td style={{ width: "25%" }}><FaCheckCircle size="1.25rem" /></td>
                  </tr>
                  <tr>
                    <td style={{ width: "40%" }}>                    <strong className='graycolumn'>Integrity of data stored in system...<span>view more</span></strong>
                    </td>
                    <td style={{ width: "25%" }}><FaCheckCircle size="1.25rem" /></td>
                    <td style={{ width: "25%" }}><FaCheckCircle size="1.25rem" /></td>
                  </tr>
                  <tr>
                    <td style={{ width: "40%" }}>                    <strong className='graycolumn'>Integrity of data stored in system...<span>view more</span></strong>
                    </td>
                    <td style={{ width: "25%" }}><FaCheckCircle size="1.25rem" /></td>
                    <td style={{ width: "25%" }}><FaCheckCircle size="1.25rem" /></td>
                  </tr>
                  <tr>
                    <td style={{ width: "40%" }}>                    <strong className='graycolumn'>Integrity of data stored in system...<span>view more</span></strong>
                    </td>
                    <td style={{ width: "25%" }}><FaCheckCircle size="1.25rem" /></td>
                    <td style={{ width: "25%" }}><FaCheckCircle size="1.25rem" /></td>
                  </tr>
                  <tr>
                    <td style={{ width: "40%" }}>                    <strong className='graycolumn'>Integrity of data stored in system...<span>view more</span></strong>
                    </td>
                    <td style={{ width: "25%" }}><FaCheckCircle size="1.25rem" /></td>
                    <td style={{ width: "25%" }}><FaCheckCircle size="1.25rem" /></td>
                  </tr>
                </tbody>
              </table>
            </section>
              <section className='Section-right'>
            <h3>Risk Scenario - <span>Confidence of system ABC is compromised.</span></h3>
            <RiskSenarioTabs/>
          </section>
          </div>
        </div>
      </div>
    )
}

export default Assignment;
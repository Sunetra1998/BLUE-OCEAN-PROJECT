import React, { useState } from 'react';
import './RiskScenarios.scss';
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header/Header';
import { FaArrowLeft } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import AddRiskScenariosModal from '../AddRiskScenariosModal/AddRiskScenariosModal';
import Card2 from '../Card2/Card2';
import Button from '../Button/Button';
import CustomInput from '../Custominput/CustomInput';
import Pagination from '../Pagination/Pagination';

const riskScenarioData = [
    {
        RiskID: "RS-8306432",
        RiskScenario: "Confidentiality of system ABC is compromised.",
        RiskDescription:
            "This risk scenario occurs when sensitive data in a system is disclosed to unauthorized users.",
        TagKey: "Industry",
        TagValue: "Healthcare",
    },
    {
        RiskId: "RS-8306433",
        RiskScenario: "Integrity of data stored in system ABC is compromised.",
        RiskDescription:
            "This risk scenario occurs when sensitive data is tampered with.",
        TagKey: "Industry",
        TagValue: "Healthcare",
    },
    {
        RiskId: "RS-8306434",
        RiskScenario:
            "System ABC is operationally unavailable for an extended time period.",
        RiskDescription:
            "This scenario occurs when the system is down and not accessible.",
        TagKey: "Industry",
        TagValue: "Healthcare",
    },
    {
        RiskId: "RS-8306435",
        RiskScenario: "Confidentiality of system XYZ is compromised.",
        RiskDescription:
            "This risk scenario occurs when sensitive data in a system is disclosed to unauthorized users.",
        TagKey: "Industry",
        TagValue: "Banking",
    },
    {
        RiskId: "RS-8306436",
        RiskScenario: "Integrity of data stored in system XYZ is compromised.",
        RiskDescription:
            "This risk scenario occurs when sensitive data is tampered with.",
        TagKey: "Industry",
        TagValue: "Banking",
    },
    {
        RiskId: "RS-8306437",
        RiskScenario:
            "System XYZ is operationally unavailable for an extended time period.",
        RiskDescription:
            "This scenario occurs when the system is down and not accessible.",
        TagKey: "Industry",
        TagValue: "Banking",
    },
    {
        RiskId: "RS-8306438",
        RiskScenario: "Confidentiality of system KLM is compromised.",
        RiskDescription:
            "This risk scenario occurs when sensitive data in a system is disclosed to unauthorized users.",
        TagKey: "Industry",
        TagValue: "Technology",
    },
    {
        RiskId: "RS-8306439",
        RiskScenario: "Integrity of data stored in system KLM is compromised.",
        RiskDescription:
            "This risk scenario occurs when sensitive data is tampered with.",
        TagKey: "Industry",
        TagValue: "Technology",
    },
    {
        RiskId: "RS-8306440",
        RiskScenario:
            "System KLM is operationally unavailable for an extended time period.",
        RiskDescription:
            "This scenario occurs when the system is down and not accessible.",
        TagKey: "Industry",
        TagValue: "Technology",
    },
];
const RiskScenarios = () => {
    const navigate = useNavigate(); // Initialize navigate function
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleBack = () => {
        navigate('/library'); // Navigate to '/library' path
    };

    const handleItemsPerPageChange = (value) => {
        setItemsPerPage(value);
    };

    // Calculate the range of items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = riskScenarioData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='RiskScenarios'>
            <Sidebar />
            <div className='Main'>
                <Header />
                
                <div className='Navigation'>
                    <div onClick={handleBack}>
                        <FaArrowLeft size="1.25rem" className='icon' />
                        <h3>Library</h3>
                        <RxSlash size="1.25rem" />
                        <h3 className='Title'>Risk Scenarios</h3>
                    </div>
                    <Button onClick={handleOpenModal} type="submit" name="Add Risk Scenario" />
                    <AddRiskScenariosModal isOpen={isOpen} onClose={handleCloseModal} />
                </div>
                <div className='Risk-section'>
                    <main>
                        <CustomInput
                            label="Search"
                            type="search"
                            name="search"
                            placeholder="Search by keywords"
                        />
                        <div className="right">
                            <Button
                                bgColor="white"
                                color="black"
                                name="Sort: RiskId (Ascending) "
                            />
                            <Button bgColor="white" color="black" name="Filter " />
                        </div>
                    </main>
                    <section className="card2-container">
                        <div>
                            {currentItems.map((risk) => (
                                <Card2
                                    key={risk.RiskId}
                                    riskId={risk.RiskId}
                                    tagKey={risk.TagKey}
                                    tagValue={risk.TagValue}
                                    riskScenario={risk.RiskScenario}
                                />
                            ))}
                            <Pagination
                                totalItems={riskScenarioData.length}
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                                onPageChange={setCurrentPage}
                                onItemsPerPageChange={handleItemsPerPageChange}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RiskScenarios;

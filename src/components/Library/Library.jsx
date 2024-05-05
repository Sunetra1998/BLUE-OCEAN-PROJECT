import React from 'react'
import "./Library.scss";
import Card from '../Card/Card';
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header/Header';

const Library = () => {
    const libraryItems = [
        {
            title: "Risk Scenarios",
            text: "Anticipate and address potential cybersecurity risks to business.",
            footerText: "All Scenarios:40 Published:32 Disabled:3 Draft:5",
            path: "/library/risk-scenarios" 
        },
        {
            title: "Assessment",
            text: "Assess risk scenarios to identify net risk scores.",
            footerText: "",
            path: "/library/assessment"
        },
        {
            title: "Reports",
            text: "Generate reports for the business and security leaders.",
            footerText: "",
            path: "/library/reports" 
        },
    ];
    return (
        <div className='library'>
            <Sidebar />
            <div className='Main'>
            <Header />
                <div className="library-container">
                    <div className="card-container">
                        {libraryItems.map((item) => (
                            <Card
                                key={item.title}
                                title={item.title}
                                text={item.text}
                                footerText={item.footerText}
                                path={item.path}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Library;
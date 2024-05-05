import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../sidebar/Sidebar'
import './Reports.scss';
import LineChart from '../ReportsChart/LineChart';
import BarChart from '../ReportsChart/BarChart';

const Reports = () => {
  const [populationData, setPopulationData] = useState([]);
  const [userData, setUserData] = useState(() => ({
    labels: [],
    datasets: [],
  }));

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const jsonData = await response.json();
      setPopulationData(jsonData.data);
      const sortedPopulationData = [...populationData].sort(
        (a, b) => a.Year - b.Year
      );
      setUserData({
        labels: sortedPopulationData.map((data) => data.Year),
        datasets: [
          {
            label: "Population",
            data: sortedPopulationData.map((data) => data.Population),
            backgroundColor: ["skyblue", "#50AF95", "#F3BA2F"],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [populationData]);
  return (
    <div className='Reports'>
      <Sidebar />
      <div className='Main'>
        <Header />
        <div className='ChartContainer'>
          <div className='Chart'>
            <LineChart chartData={userData} />
          </div>
          <div className='Chart'>
            <BarChart chartData={userData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
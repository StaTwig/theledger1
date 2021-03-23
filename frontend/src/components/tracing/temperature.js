import React, { useState, useEffect } from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import { getTemperature } from '../../actions/shipmentActions';
//import './style.scss'

const Chart = (props) => {
  const [temp, setTemp] = useState({});

  useEffect(() => {
    // const interval = setInterval(() => {
    //   async function fetchData() {
    //     const result = await getTemperature();
    //     setTemp(result.data)
    //   }
    //   fetchData();
    // }, 5000);
    // return () => {
    //   window.clearInterval(interval); // clear the interval in the cleanup function
    // };
    let arr = {};
    props.tempData.forEach(row => {
      let newTemp = {};
      newTemp[new Date(row.temp.UnixTimeStamp*1000)] = parseInt(row.temp.temp);
      arr = { ...arr, ...newTemp };
    });
    setTemp(arr);
  }, []);

  return (
    <div>
      <LineChart
        ymin="-5" ymax="10" min={-5} max={100}
        colors={["#FA7923", "#666"]}
        id="users-chart" height="220px"
        data={temp}
      />
    </div>
  );
};
export default Chart;

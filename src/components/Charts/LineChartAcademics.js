import React, { Component, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Card from "components/Card/Card";
import Chart from "react-apexcharts";
//import { lineChartData, lineChartOptions } from "variables/charts";

import axios from "axios";

import { URL, server_URL } from "controller/urls_config";

 const lineChartData = [
  {
    name: "CS123",
    data: [50, 40],
  },
  {
    name: "CS986",
    data: [30, 90],
  },
  {
    name: "CS875",
    data: [60, 10],
  },
];

 const lineChartOptions = {
  chart: {
    toolbar: {
      show: true,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: [
      "CAT1",
      "CAT2",
    ],
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    colors: ["#aba0ef", "#2D3748","#2D3790"],
  },
  colors: ["#aba0ef", "#2D3748","#2D3790"],
};
 
function LineChart()
{
    //const [intern_lst, setintern] = useState([100]);
  
    //var lineChartData = { name: "Academics", data: intern_lst };
  
    let params = new URLSearchParams();
    params.append("batch", localStorage.getItem("batch"));
    params.append("dept", localStorage.getItem("dept"));
  
    useState(async () => {
      axios.post(server_URL + "AcademicsGraphCA", params).then((items) => {
         console.log(items);
        // console.log(items.data.placement_lst);
        // console.log(...items.data.placement_lst);
        // setintern(items.data.intern_lst);
        // lineChartOptions.xaxis.categories = items.data.batches;
      });
    });
  
  return( <ReactApexChart
        options={lineChartOptions}
        series={lineChartData}
        width="100%"
        height="100%"
      />);
}
  
export default LineChart;
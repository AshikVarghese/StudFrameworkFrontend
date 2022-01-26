<<<<<<< HEAD
import React, { Component, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Card from "components/Card/Card";
import Chart from "react-apexcharts";
//import { lineChartData, lineChartOptions } from "variables/charts";
=======
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
>>>>>>> 03e8fd890bbbb3bafe96fb1ebb5c7bc5e371d4ae

import axios from "axios";

import { URL, server_URL } from "controller/urls_config";

<<<<<<< HEAD
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
    categories: ["CAT1", "CAT2"],
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
    colors: ["#aba0ef", "#2D3748", "#2D3790"],
  },
  colors: ["#aba0ef", "#2D3748", "#2D3790"],
};

function LineChart() {
  //const [intern_lst, setintern] = useState([100]);

  //var lineChartData = { name: "Academics", data: intern_lst };
=======
function LineChart() {
  //const [intern_lst, setintern] = useState([100]);

  //var lineChartData = { name: "Academics", data: intern_lst };
  const [academics_data, set_academics_data] = useState([
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
  ]);
  const [lineChartOptions, set_linechartOptions] = useState({
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
      categories: ["CAT1", "CAT2"],
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
      colors: ["#aba0ef", "#2D3748", "#2D3790"],
    },
    colors: ["#aba0ef", "#2D3748", "#2D3790"],
  });
>>>>>>> 03e8fd890bbbb3bafe96fb1ebb5c7bc5e371d4ae

  let params = new URLSearchParams();
  params.append("batch", localStorage.getItem("batch"));
  params.append("dept", localStorage.getItem("dept"));

  useState(async () => {
    axios.post(server_URL + "AcademicsGraphHOD", params).then((items) => {
<<<<<<< HEAD
      console.log(items);
      // console.log(items.data.placement_lst);
      // console.log(...items.data.placement_lst);
      // setintern(items.data.intern_lst);
      // lineChartOptions.xaxis.categories = items.data.batches;
=======
      let temp_data = items.data.results.results.map((rec) => {
        let temp_json = { name: rec.subj_id, data: [] };
        for (let i = 0; i < items.data.results.exams.length; i++) {
          temp_json.data.push(rec[items.data.results.exams[i]]);
        }
        return temp_json;
      });
      console.log(temp_data);
      set_academics_data(temp_data);
      set_linechartOptions({
        ...lineChartOptions,
        xaxis: {
          categories: items.data.results.exams,
          labels: {
            style: {
              colors: "#c8cfca",
              fontSize: "12px",
            },
          },
        },
      });
>>>>>>> 03e8fd890bbbb3bafe96fb1ebb5c7bc5e371d4ae
    });
  });

  return (
    <ReactApexChart
      options={lineChartOptions}
<<<<<<< HEAD
      series={lineChartData}
=======
      series={academics_data}
>>>>>>> 03e8fd890bbbb3bafe96fb1ebb5c7bc5e371d4ae
      width="100%"
      height="100%"
    />
  );
}

export default LineChart;

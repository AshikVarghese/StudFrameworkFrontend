import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

import axios from "axios";

import { URL, server_URL } from "controller/urls_config";

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

  let params = new URLSearchParams();
  params.append("batch", localStorage.getItem("batch"));
  params.append("dept", localStorage.getItem("dept"));

  useState(async () => {
    axios.post(server_URL + "AcademicsGraphHOD", params).then((items) => {
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
    });
  });

  return (
    <ReactApexChart
      options={lineChartOptions}
      series={academics_data}
      width="100%"
      height="100%"
    />
  );
}

export default LineChart;

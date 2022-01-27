<<<<<<< HEAD
import React, { Component, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Card from "components/Card/Card";
import Chart from "react-apexcharts";
//import { lineChartData, lineChartOptions } from "variables/charts";
=======
import React, { useState } from "react";
<<<<<<< HEAD
import { Box, Flex, Stat, StatLabel } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import LineChartComponent from "./LineChart";
=======
import ReactApexChart from "react-apexcharts";
>>>>>>> 03e8fd890bbbb3bafe96fb1ebb5c7bc5e371d4ae
>>>>>>> 6e82dcc1ad0cf247525cd313a9ecfd96dfa9bbf0

import axios from "axios";

import { server_URL } from "controller/urls_config";

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
  const [batches, setbatches] = useState(["2019-2023"]);

  const [batched_result, set_batched_result] = useState({
    "2020-2024": [
      {
        name: "CS123",
        data: [50, 40],
      },
    ],
    "2019-2023": [
      {
        name: "CS123",
        data: [50, 40],
      },
    ],
  });

  const [lineChartOptions, set_linechartOptions] = useState({
    chart: {
      toolbar: {
        show: false,
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
      show: true,
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
  params.append("batch", "None");
  params.append("dept", localStorage.getItem("dept"));

  useState(async () => {
    axios.post(server_URL + "AcademicsGraphHOD", params).then((items) => {
<<<<<<< HEAD
      set_batched_result(items.data.results.batched_result);
      setbatches(Object.keys(items.data.results.batched_result));
=======
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
>>>>>>> 6e82dcc1ad0cf247525cd313a9ecfd96dfa9bbf0
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
<<<<<<< HEAD
    <>
      {batches.map((res) => {
        return (
          <Card minH="300px">
            <CardBody>
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                w="100%"
              >
                <Stat mr="auto">
                  <StatLabel
                    fontSize="sm"
                    color="gray.400"
                    fontWeight="bold"
                    pb="1.5rem"
                  >
                    Academics {res}
                  </StatLabel>
                </Stat>
                <Box w="100%" h={{ sm: "225px" }} ps="8px">
                  <LineChartComponent
                    lineChartOptions={lineChartOptions}
                    series={batched_result[res]}
                  />
                </Box>
              </Flex>
            </CardBody>
          </Card>
        );
      })}
    </>
=======
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
>>>>>>> 6e82dcc1ad0cf247525cd313a9ecfd96dfa9bbf0
  );
}

export default LineChart;

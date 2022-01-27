// Academic summary Charts

import React, { useState } from "react";
import Card from "components/Card/Card";
<<<<<<< HEAD
import CardBody from "components/Card/CardBody.js";
import BarChartComponent from "./BarChart";
import { Flex, Stat, StatLabel } from "@chakra-ui/react";
=======
import Chart from "react-apexcharts";
import { barChartData, barChartOptions } from "variables/charts";

>>>>>>> 6e82dcc1ad0cf247525cd313a9ecfd96dfa9bbf0
import axios from "axios";

import { URL, server_URL } from "controller/urls_config";

<<<<<<< HEAD
function BarChartAcademicSummary() {
  const [batches, setbatches] = useState(["2019-2023"]);
  const [chartData, setChartData] = useState({
    "2019-2023": { 8.5: 2, 9.2: 1, 9.9: 1 },
    "2020-2024": { 9.9: 5 },
  });
=======
let chartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      backgroundColor: "red",
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        backgroundColor: "red",
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["8.5", "8.7", "9.2", "9.9"],
    show: true,
    labels: {
      show: true,
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "#fff",
    labels: {
      show: true,
      style: {
        colors: "#fff",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
  },
  fill: {
    colors: "#fff",
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: "12px",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
          },
        },
      },
    },
  ],
};

function BarChartAcademicSummary() {
  const [student_lst, setstud] = useState([100]);

  var chartData = { name: "AcademicSummary", data: student_lst };
>>>>>>> 6e82dcc1ad0cf247525cd313a9ecfd96dfa9bbf0

  // var chartData = { name: "AcademicSummary", data: student_lst };
  let params = new URLSearchParams();
  params.append("batch", "None");
  params.append("dept", localStorage.getItem("dept"));
<<<<<<< HEAD
  useState(async () => {
    axios.post(server_URL + "AcademicSummaryGraphHOD", params).then((items) => {
      setbatches(items.data.batches);
      setChartData(items.data.results);
      // setstud(items.data.student_lst);
      // chartOptions.xaxis.categories = items.data.CGPA;
=======

  useState(async () => {
    axios.post(server_URL + "AcademicSummaryGraphHOD", params).then((items) => {
      console.log(items);
      // console.log(items.data.placement_lst);
      // console.log(...items.data.placement_lst);
      setstud(items.data.student_lst);
      chartOptions.xaxis.categories = items.data.CGPA;
>>>>>>> 6e82dcc1ad0cf247525cd313a9ecfd96dfa9bbf0
    });
  });

  return batches.map((res) => {
    return (
      <Card minH="300px">
        <CardBody>
          <Flex flexDirection="column" align="center" justify="center" w="100%">
            <Stat mr="auto">
              <StatLabel
                fontSize="sm"
                color="gray.400"
                fontWeight="bold"
                pb="1.5rem"
              >
                Academic Summary {res}
              </StatLabel>
            </Stat>
            <BarChartComponent
              chartData={Object.values(chartData[res])}
              categories={Object.keys(chartData[res])}
            />
          </Flex>
        </CardBody>
      </Card>
    );
  });
}

export default BarChartAcademicSummary;

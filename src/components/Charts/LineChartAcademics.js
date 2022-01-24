// import React, { Component, useState } from "react";
// import ReactApexChart from "react-apexcharts";
// import Card from "components/Card/Card";
// import Chart from "react-apexcharts";
// import { lineChartData, lineChartOptions } from "variables/charts";

// import axios from "axios";

// import { URL, server_URL } from "controller/urls_config";


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
      categories: ["2019-2023"],
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
  
class LineChart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        chartData: [],
        chartOptions: {},
      };
    }
  
    componentDidMount() {
      this.setState({
        chartData: lineChartData,
        chartOptions: lineChartOptions,
      });
    }
  
    render() {
      return (
        <ReactApexChart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="area"
          width="100%"
          height="100%"
        />
      );
    }
  }
  
  export default LineChart;
  
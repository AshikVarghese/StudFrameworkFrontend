import React from "react";
import ReactApexChart from "react-apexcharts";
// import { lineChartData, lineChartOptions } from "variables/charts";


function LineChart()
{
  return( <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="area"
        width="100%"
        height="100%"
      />);
}


export default LineChart;

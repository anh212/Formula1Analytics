import React, { useEffect, useRef } from 'react';
import Chart from "chart.js";
import 'antd/dist/antd.css';
let myLineChart;

function Bar({ stat, data, labels }) {
  //Chart object
  const chartRef = useRef(null);

  //Keep reference to chart
  function buildChart() {
    const myChartRef = chartRef.current.getContext("2d");

    if (typeof myLineChart !== "undefined") myLineChart.destroy();
    console.log(stat)

    myLineChart = new Chart(myChartRef, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: stat,
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          title: {
            display: true,
            text: stat
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
        }
    });
  }

  useEffect(() => {
    buildChart();
  });

  return (
    <div className="graph-layout">
      <div className="graphContainer">
        <canvas
          id="myChart"
          ref={chartRef}
        />
      </div>
    </div>
  );
}

export default Bar;

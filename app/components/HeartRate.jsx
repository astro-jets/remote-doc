"use client"
// import { useEffect } from 'react';
// import Chart from 'chart.js';

// export default function HeartRate({name, color, id }) {
//     useEffect(() => {
//         var config = {
//             type: 'line',
//             data: {
//                 labels: [
//                     'January',
//                     'February',
//                     'March',
//                     'April',
//                     'May',
//                     'June',
//                     'July',
//                 ],
//                 datasets: [
//                     {
//                         label: name,
//                         backgroundColor: color,
//                         borderColor: color,
//                         data: [65, 78, 66, 44, 56, 67, 75],
//                         fill: false,
//                     },
//                 ],
//             },
//             options: {
//                 maintainAspectRatio: false,
//                 responsive: true,
//                 title: {
//                     display: false,
//                     text: 'Sales Charts',
//                     fontColor: '#ffffff',
//                 },
//                 legend: {
//                     labels: {
//                         fontColor: '#ffffff',
//                     },
//                     align: 'end',
//                     position: 'bottom',
//                 },
//                 tooltips: {
//                     mode: 'index',
//                     intersect: false,
//                 },
//                 hover: {
//                     mode: 'nearest',
//                     intersect: true,
//                 },
//                 scales: {
//                     xAxes: [
//                         {
//                             ticks: {
//                                 fontColor: '#ffffff',
//                             },
//                             display: true,
//                             scaleLabel: {
//                                 display: false,
//                                 labelString: 'Month',
//                                 fontColor: '#ffffff',
//                             },
//                             gridLines: {
//                                 display: false,
//                                 borderDash: [2],
//                                 borderDashOffset: [2],
//                                 color: '#ffffff',
//                                 zeroLineColor: 'rgba(0, 0, 0, 0)',
//                                 zeroLineBorderDash: [2],
//                                 zeroLineBorderDashOffset: [2],
//                             },
//                         },
//                     ],
//                     yAxes: [
//                         {
//                             ticks: {
//                                 fontColor: '#ffffff',
//                             },
//                             display: true,
//                             scaleLabel: {
//                                 display: false,
//                                 labelString: 'Value',
//                                 fontColor: '#ffffff',
//                             },
//                             gridLines: {
//                                 borderDash: [3],
//                                 borderDashOffset: [3],
//                                 drawBorder: false,
//                                 color: '#ffffff',
//                                 zeroLineColor: '#ffffff',
//                                 zeroLineBorderDash: [2],
//                                 zeroLineBorderDashOffset: [2],
//                             },
//                         },
//                     ],
//                 },
//             },
//         };
//         var ctx = document.getElementById(id).getContext('2d');
//         window.myLine = new Chart(ctx, config);
//     }, []);

//     return (

//         <div className="h-full w-[70%]">
//             <canvas id={id} className='bg-gray-800 text-#ffffff'></canvas>
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

export default function HeartRate({ vitalSign, color, initialData }) {
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    const uniqueId = `line-chart-${vitalSign.replace(" ", "-")}`;

    var config = {
      type: "line",
      data: {
        labels: Array.from({ length: initialData.length }, (_, i) => i + 1), // Numeric labels (1, 2, 3, ...)
        datasets: [
          {
            label: vitalSign,
            backgroundColor: color,
            borderColor: color,
            data: chartData,
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        animation: {
          duration: 2950, // Adjust the duration as needed
          easing: "linear", // Use a linear easing function for smoother animations
          onProgress: (animation) => {
            // Update the chart's data points in real-time
            const newDataPoint = Math.floor(Math.random() * 20) + 80; // Simulate real-time data changes
            chartData.push(newDataPoint);

            // Limit the number of data points to maintain a fixed range of values
            if (chartData.length > 20) {
              chartData.shift();
            }

            animation.chart.data.datasets[0].data = chartData;
          },
        },
        title: {
          display: false,
          text: "Real-time Vital Sign Monitoring",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "white",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Time",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "white",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "white",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "white",
                zeroLineColor: "white",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };

    var ctx = document.getElementById(uniqueId).getContext("2d");
    var chart = new Chart(ctx, config);

    return () => {
      chart.destroy(); // Destroy the chart when the component unmounts
    };
  }, [vitalSign,initialData]);

  return (
    <div className="h-full w-[70%]">
      <canvas id={`line-chart-${vitalSign.replace(" ", "-")}`} className="bg-gray-800 text-white"></canvas>
    </div>
  );
}



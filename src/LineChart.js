import React from "react";
import { useEffect } from "react";
import { Scatter } from "react-chartjs-2";
import { UserData, UserData2 } from "./Data";
import { Chart as ChartJS, registerables } from "chart.js/auto";


function LineChart({ chartData }) {

  useEffect(() => {
    ChartJS.register(...registerables)
  })

  const y_max = Math.max(...UserData.map(o => o.y)) * 1.2 ; //highest value of y * 1.2
  const x_max = Math.round(Math.max(...UserData2.map(o => o.x)) * 1.2) ; //highest value of x * 1.2

  return <Scatter data={chartData} options={{
    plugins: {
      legend: {
        display: true,
        //position: "bottom",
        fontColor: 'black',
    fontFamily: 'Calibri Light',
    },
      
      title: {
        display: true,
        text: "Relation between the production rate and flowing bottom hole pressure"
      },
    },


    scales: {
      y: {
        max: y_max,
        title: {
          display: true,
          text: "Producing Bottomhole Pressure \\n (Pascal)",
        },
        
          },

      x: {
        max: x_max,
        beginAtZero: true,
        title: {
          display: true,
          text: "Total production rate (Cube meters per day)"
        }
      }
      }

  }

}/>;
}

export default LineChart;

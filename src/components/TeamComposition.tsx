"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Blue", "Green", "Yellow", "Purple", "Orange"],
  datasets: [
    {
      label: "Votes",
      data: [25, 20, 10, 5, 1],
      backgroundColor: [
        "rgba(52, 152, 219, 0.2)",
        "rgba(46, 204, 113, 0.2)",
        "rgba(241, 196, 15, 0.2)",
        "rgba(155, 89, 182, 0.2)",
        "rgba(230, 126, 34, 0.2)",
      ],
      borderColor: [
        "rgba(52, 152, 219, 1)",
        "rgba(46, 204, 113, 1)",
        "rgba(241, 196, 15, 1)",
        "rgba(155, 89, 182, 1)",
        "rgba(230, 126, 34, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "bottom" },
  },
};

export default function TeamComposition() {
  return <Doughnut data={data} options={options} />;
}

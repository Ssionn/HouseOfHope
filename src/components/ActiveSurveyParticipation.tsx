'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  datasets: [
    {
      label: 'Completion Percentage',
      data: [75, 50, 90, 65, 80],
      backgroundColor: 'rgba(54, 162, 235, 0.6)'
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100
    }
  }
};

export default function ActiveSurveyParticipation() {
  return <Bar data={data} options={options} />;
}

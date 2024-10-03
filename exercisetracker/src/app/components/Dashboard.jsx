'use client';

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Calories',
        data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
        borderColor: '#8884d8',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Steps',
        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
        borderColor: '#82ca9d',
        yAxisID: 'y-axis-2',
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      'y-axis-1': {
        type: 'linear',
        display: true,
        position: 'left',
      },
      'y-axis-2': {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
        <Line data={data} options={options} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Today's Summary</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span>Steps</span>
            <span className="font-semibold">8,432</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Calories Burned</span>
            <span className="font-semibold">1,200</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Active Minutes</span>
            <span className="font-semibold">45</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
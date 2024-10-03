import { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const Dashboard = () => {
  // Use ref to refer to the canvas element
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          { label: 'Calories', data: [2400, 1398, 9800, 3908, 4800, 3800, 4300], borderColor: '#8884d8' },
          { label: 'Steps', data: [4000, 3000, 2000, 2780, 1890, 2390, 3490], borderColor: '#82ca9d' }
        ]
      },
      options: { responsive: true }
    });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
        {/* Attach the ref to the canvas element */}
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default Dashboard;

// Dashboard data
const data = [
  { name: 'Mon', calories: 2400, steps: 4000 },
  { name: 'Tue', calories: 1398, steps: 3000 },
  { name: 'Wed', calories: 9800, steps: 2000 },
  { name: 'Thu', calories: 3908, steps: 2780 },
  { name: 'Fri', calories: 4800, steps: 1890 },
  { name: 'Sat', calories: 3800, steps: 2390 },
  { name: 'Sun', calories: 4300, steps: 3490 },
];

function createDashboard() {
  const dashboardHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Weekly Activity</h2>
        <canvas id="activityChart" width="400" height="200"></canvas>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Today's Summary</h2>
        <ul class="space-y-4">
          <li class="flex justify-between items-center">
            <span>Steps</span>
            <span class="font-semibold">8,432</span>
          </li>
          <li class="flex justify-between items-center">
            <span>Calories Burned</span>
            <span class="font-semibold">1,200</span>
          </li>
          <li class="flex justify-between items-center">
            <span>Active Minutes</span>
            <span class="font-semibold">45</span>
          </li>
        </ul>
      </div>
    </div>
  `;

  document.getElementById('page-content').innerHTML = dashboardHTML;

  // Create the chart
  createActivityChart();
}

function createActivityChart() {
  const ctx = document.getElementById('activityChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(item => item.name),
      datasets: [
        {
          label: 'Calories',
          data: data.map(item => item.calories),
          borderColor: '#8884d8',
          yAxisID: 'y-axis-1',
        },
        {
          label: 'Steps',
          data: data.map(item => item.steps),
          borderColor: '#82ca9d',
          yAxisID: 'y-axis-2',
        }
      ]
    },
    options: {
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
    }
  });
}

// Call this function when you want to render the dashboard
// createDashboard();
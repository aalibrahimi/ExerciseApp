document.addEventListener('DOMContentLoaded', function () {
    const profileButton = document.getElementById('user-menu-button');
    const dropdownMenu = document.querySelector('[role="menu"]');

    profileButton.addEventListener('click', function () {
        // Toggle the visibility of the dropdown menu
        dropdownMenu.classList.toggle('hidden');
    });

    // Hide dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!profileButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add('hidden');
        }
    });
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker registered'))
        .catch(error => console.error('Service Worker registration failed:', error));
}


// 
// Define the content for each route
const routes = {
    'dashboard': { 
      title: 'Dashboard', 
      content: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-xl font-semibold mb-4">Weekly Activity</h2>
            <p>Your activity chart would go here.</p>
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
      `
    },
    'heart-rate-monitor': { 
      title: 'Heart Rate Monitor', 
      content: `
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-4">Heart Rate Over 24 Hours</h2>
          <p>Your heart rate chart would go here.</p>
          <div class="mt-6">
            <h3 class="text-lg font-semibold mb-2">Current Heart Rate</h3>
            <p class="text-3xl font-bold text-red-500">72 BPM</p>
          </div>
        </div>
      `
    },
    'exercise-tutorial': { 
      title: 'Exercise Tutorial', 
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-xl font-semibold mb-2">Push-ups</h2>
            <p class="mb-4">Great for chest, arms, and core strength.</p>
            <div class="aspect-w-16 aspect-h-9">
              <img src="/src/gym.png" alt="Push-ups tutorial" class="rounded-lg">
            </div>
            <a href="#" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Watch Tutorial</a>
          </div>
          <!-- Add more exercises here -->
        </div>
      `
    },
    'my-fitness-plan': { 
      title: 'My Fitness Plan', 
      content: `
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-2xl font-semibold mb-6">Weekly Fitness Plan</h2>
          <div class="space-y-4">
            <div class="border-b pb-4">
              <h3 class="text-lg font-semibold mb-2">Monday</h3>
              <ul class="list-disc list-inside">
                <li>30 min jogging</li>
                <li>3 sets of push-ups</li>
                <li>3 sets of squats</li>
              </ul>
            </div>
            <!-- Add more days here -->
          </div>
        </div>
      `
    },
    'workout-tracker': { 
      title: 'Workout Tracker', 
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-xl font-semibold mb-4">Add New Workout</h2>
            <form id="workout-form" class="space-y-4">
              <input type="date" name="date" class="w-full p-2 border rounded" required>
              <input type="text" name="type" placeholder="Workout Type" class="w-full p-2 border rounded" required>
              <input type="number" name="duration" placeholder="Duration (minutes)" class="w-full p-2 border rounded" required>
              <input type="number" name="calories" placeholder="Calories Burned" class="w-full p-2 border rounded" required>
              <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Workout</button>
            </form>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-xl font-semibold mb-4">Workout History</h2>
            <table class="w-full" id="workout-history">
              <thead>
                <tr>
                  <th class="text-left">Date</th>
                  <th class="text-left">Type</th>
                  <th class="text-left">Duration</th>
                  <th class="text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                <!-- Workout history will be inserted here -->
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  };
  
  function renderContent(route) {
    const { title, content } = routes[route];
    document.getElementById('page-title').textContent = title;
    document.getElementById('page-content').innerHTML = content;
  
    // Add event listener for workout form if on the workout tracker page
    if (route === 'workout-tracker') {
      const form = document.getElementById('workout-form');
      if (form) {
        form.addEventListener('submit', handleWorkoutSubmit);
      }
    }
  }
  
  function handleWorkoutSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const workoutData = Object.fromEntries(formData.entries());
    
    // Add workout to history
    const historyTable = document.getElementById('workout-history').getElementsByTagName('tbody')[0];
    const newRow = historyTable.insertRow();
    newRow.innerHTML = `
      <td>${workoutData.date}</td>
      <td>${workoutData.type}</td>
      <td>${workoutData.duration} min</td>
      <td>${workoutData.calories}</td>
    `;
  
    // Clear form
    e.target.reset();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Setup navigation
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const route = e.target.getAttribute('href').slice(1);
        renderContent(route);
      });
    });
  
    // Setup profile dropdown
    const profileButton = document.getElementById('user-menu-button');
    const dropdownMenu = document.querySelector('[role="menu"]');
  
    profileButton.addEventListener('click', function () {
      dropdownMenu.classList.toggle('hidden');
    });
  
    // Hide dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
      if (!profileButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
      }
    });
  
    // Initial render
    renderContent('dashboard');
  });
  
  // Service Worker registration
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('Service Worker registered'))
      .catch(error => console.error('Service Worker registration failed:', error));
  }
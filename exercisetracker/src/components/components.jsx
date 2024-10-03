import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js';

// Dashboard Component
const Dashboard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Calories',
            data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
            borderColor: '#8884d8',
          },
          {
            label: 'Steps',
            data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
            borderColor: '#82ca9d',
          },
        ],
      },
      options: { responsive: true },
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
        <canvas ref={chartRef} width="400" height="200"></canvas>
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
};

// ExerciseTutorial Component
const ExerciseTutorial = () => {
  const exercises = [
    { name: 'Push-ups', description: 'Great for chest, arms, and core strength.', videoUrl: 'https://example.com/pushups' },
    { name: 'Squats', description: 'Builds lower body strength and improves balance.', videoUrl: 'https://example.com/squats' },
    { name: 'Planks', description: 'Strengthens core and improves posture.', videoUrl: 'https://example.com/planks' },
  ];

  return (
    <div className="space-y-6">
      {exercises.map((exercise, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
          <p className="mb-4">{exercise.description}</p>
          <div className="aspect-w-16 aspect-h-9">
            {/* Placeholder image */}
            <img src="/api/placeholder/640/360" alt={`${exercise.name} tutorial`} className="rounded-lg" />
          </div>
          <a href={exercise.videoUrl} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Watch Tutorial
          </a>
        </div>
      ))}
    </div>
  );
};

// MyFitnessPlan Component
const MyFitnessPlan = () => {
  const fitnessPlans = [
    { day: 'Monday', activities: ['30 min jogging', '3 sets of push-ups', '3 sets of squats'] },
    { day: 'Tuesday', activities: ['45 min cycling', '3 sets of pull-ups', '3 sets of lunges'] },
    { day: 'Wednesday', activities: ['Rest day', 'Light stretching'] },
    { day: 'Thursday', activities: ['30 min swimming', '3 sets of bench press', '3 sets of deadlifts'] },
    { day: 'Friday', activities: ['45 min HIIT', '3 sets of shoulder press', '3 sets of leg press'] },
    { day: 'Saturday', activities: ['1 hour hiking', 'Core workout'] },
    { day: 'Sunday', activities: ['Rest day', 'Yoga session'] },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">Weekly Fitness Plan</h2>
      <div className="space-y-4">
        {fitnessPlans.map((plan, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0">
            <h3 className="text-lg font-semibold mb-2">{plan.day}</h3>
            <ul className="list-disc list-inside">
              {plan.activities.map((activity, actIndex) => (
                <li key={actIndex}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// WorkoutTracker Component
const WorkoutTracker = () => {
  const [workouts, setWorkouts] = useState([
    { id: 1, date: '2024-10-01', type: 'Cardio', duration: 30, calories: 300 },
    { id: 2, date: '2024-10-02', type: 'Strength', duration: 45, calories: 200 },
    { id: 3, date: '2024-10-03', type: 'Yoga', duration: 60, calories: 150 },
  ]);
  const [newWorkout, setNewWorkout] = useState({ date: '', type: '', duration: '', calories: '' });

  const handleInputChange = (e) => {
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkouts([...workouts, { ...newWorkout, id: workouts.length + 1 }]);
    setNewWorkout({ date: '', type: '', duration: '', calories: '' });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Add New Workout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="date"
            name="date"
            value={newWorkout.date}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="type"
            value={newWorkout.type}
            onChange={handleInputChange}
            placeholder="Workout Type"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="duration"
            value={newWorkout.duration}
            onChange={handleInputChange}
            placeholder="Duration (minutes)"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="calories"
            value={newWorkout.calories}
            onChange={handleInputChange}
            placeholder="Calories Burned"
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Add Workout
          </button>
        </form>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Workout History</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Date</th>
              <th className="text-left">Type</th>
              <th className="text-left">Duration</th>
              <th className="text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
               <tr key={workout.id}>
               <td>{workout.date}</td>
               <td>{workout.type}</td>
               <td>{`${workout.duration} min`}</td>
               <td>{workout.calories}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   </div>
 );
};

export { Dashboard, ExerciseTutorial, MyFitnessPlan, WorkoutTracker };
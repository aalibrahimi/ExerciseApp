import React, { useState } from 'react';

const initialWorkouts = [
  { id: 1, date: '2024-10-01', type: 'Cardio', duration: 30, calories: 300 },
  { id: 2, date: '2024-10-02', type: 'Strength', duration: 45, calories: 200 },
  { id: 3, date: '2024-10-03', type: 'Yoga', duration: 60, calories: 150 },
];

const WorkoutTracker = () => {
  const [workouts, setWorkouts] = useState(initialWorkouts);
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
          <input type="date" name="date" value={newWorkout.date} onChange={handleInputChange} className="w-full p-2 border rounded" required />
          <input type="text" name="type" value={newWorkout.type} onChange={handleInputChange} placeholder="Workout Type" className="w-full p-2 border rounded" required />
          <input type="number" name="duration" value={newWorkout.duration} onChange={handleInputChange} placeholder="Duration (minutes)" className="w-full p-2 border rounded" required />
          <input type="number" name="calories" value={newWorkout.calories} onChange={handleInputChange} placeholder="Calories Burned" className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Workout</button>
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
                <td>{workout.duration} min</td>
                <td>{workout.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkoutTracker;
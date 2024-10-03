import React from 'react';

const fitnessPlans = [
  { day: 'Monday', activities: ['30 min jogging', '3 sets of push-ups', '3 sets of squats'] },
  { day: 'Tuesday', activities: ['45 min cycling', '3 sets of pull-ups', '3 sets of lunges'] },
  { day: 'Wednesday', activities: ['Rest day', 'Light stretching'] },
  { day: 'Thursday', activities: ['30 min swimming', '3 sets of bench press', '3 sets of deadlifts'] },
  { day: 'Friday', activities: ['45 min HIIT', '3 sets of shoulder press', '3 sets of leg press'] },
  { day: 'Saturday', activities: ['1 hour hiking', 'Core workout'] },
  { day: 'Sunday', activities: ['Rest day', 'Yoga session'] },
];

const MyFitnessPlan = () => (
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

export default MyFitnessPlan;
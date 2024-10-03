'use client';

import React from 'react';

const exercises = [
  { name: 'Push-ups', description: 'Great for chest, arms, and core strength.', videoUrl: 'https://example.com/pushups' },
  { name: 'Squats', description: 'Builds lower body strength and improves balance.', videoUrl: 'https://example.com/squats' },
  { name: 'Planks', description: 'Strengthens core and improves posture.', videoUrl: 'https://example.com/planks' },
];

export default function ExerciseTutorial() {
  return (
    <div className="space-y-6">
      {exercises.map((exercise, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
          <p className="mb-4">{exercise.description}</p>
          <div className="aspect-w-16 aspect-h-9">
            <img src="/placeholder-image.jpg" alt={`${exercise.name} tutorial`} className="rounded-lg" />
          </div>
          <a href={exercise.videoUrl} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Watch Tutorial</a>
        </div>
      ))}
    </div>
  );
}
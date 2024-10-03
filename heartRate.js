import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', rate: 65 },
  { time: '04:00', rate: 60 },
  { time: '08:00', rate: 80 },
  { time: '12:00', rate: 75 },
  { time: '16:00', rate: 85 },
  { time: '20:00', rate: 70 },
  { time: '23:59', rate: 68 },
];

const HeartRateMonitor = () => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-xl font-semibold mb-4">Heart Rate Over 24 Hours</h2>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="rate" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Current Heart Rate</h3>
      <p className="text-3xl font-bold text-red-500">72 BPM</p>
    </div>
  </div>
);

export default HeartRateMonitor;
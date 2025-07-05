'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Receipts', count: 220 },
  { name: 'Errors', count: 12 },
];

export default function Charts() {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h3 className="font-semibold mb-4">Activity Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

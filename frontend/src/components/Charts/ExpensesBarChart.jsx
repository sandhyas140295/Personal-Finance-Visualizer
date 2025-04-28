


"use client"; 

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Food', amount: 400 },
  { name: 'Rent', amount: 800 },
  { name: 'Utilities', amount: 200 },
];

export default function ExpensesBarChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    
    setIsClient(true);
  }, []);

  
  if (!isClient) {
    return null; 
  }

  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="amount" fill="#8884d8" />
    </BarChart>
  );
}

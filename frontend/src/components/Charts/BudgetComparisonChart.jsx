


"use client";

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { month: "Jan", budget: 1000, expenses: 800 },
  { month: "Feb", budget: 1200, expenses: 950 },
  { month: "Mar", budget: 1100, expenses: 1000 },
];

export default function BudgetComparisonChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
   
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="budget" stroke="#82ca9d" />
      <Line type="monotone" dataKey="expenses" stroke="#8884d8" />
    </LineChart>
  );
}


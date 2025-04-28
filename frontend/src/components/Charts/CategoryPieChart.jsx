"use client";

import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 800 },
  { name: "Utilities", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function CategoryPieChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={({ name }) => name}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

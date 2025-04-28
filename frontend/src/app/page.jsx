import React from 'react';
import Dashboard from '../components/Dashboard';

const HomePage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome to Your Personal Finance Tracker</h1>
      <Dashboard />
    </div>
  );
};

export default HomePage;

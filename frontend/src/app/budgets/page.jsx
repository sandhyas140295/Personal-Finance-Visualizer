
"use client";

import React, { useEffect, useState } from 'react';
import BudgetForm from '../../components/BudgetForm';  

const BudgetsPage = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      const res = await fetch('/api/budgets');
      const data = await res.json();
      setBudgets(data);
    };

    fetchBudgets();
  }, []);

  
  const handleAddBudget = (newBudget) => {
    setBudgets([...budgets, newBudget]); 
  };

  return (
    <div>
      <BudgetForm onSubmit={handleAddBudget} /> {/* Pass onSubmit as a prop */}
      <ul>
        {budgets.map((budget, index) => (
          <li key={index}>
            {budget.category}: {budget.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetsPage;

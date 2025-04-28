"use client";

import React, { useState } from 'react';

const BudgetForm = ({ onSubmit }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();  
    if (category && amount) {
     
      onSubmit({ category, amount });
      setCategory(''); 
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit">Add Budget</button>
    </form>
  );
};

export default BudgetForm;

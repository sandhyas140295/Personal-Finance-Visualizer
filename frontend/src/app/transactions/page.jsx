
'use client';  

import React, { useEffect, useState } from 'react';
import { TransactionForm } from '../../components/TransactionForm';
import { TransactionList } from '../../components/TransactionList';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await fetch('/api/transactions');
      const data = await res.json();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <TransactionForm />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default TransactionsPage;



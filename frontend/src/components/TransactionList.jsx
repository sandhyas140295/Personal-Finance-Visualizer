import React from 'react';

export const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.amount} - {transaction.date} - {transaction.description} - {transaction.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

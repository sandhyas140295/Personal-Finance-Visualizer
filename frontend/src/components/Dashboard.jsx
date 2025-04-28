import React from 'react';
import ExpensesBarChart from './Charts/ExpensesBarChart';
import CategoryPieChart from './Charts/CategoryPieChart';
import BudgetComparisonChart from './Charts/BudgetComparisonChart';
import SummaryCard from './UI/SummaryCard';

const Dashboard = () => {
  return (
    <div>
      <SummaryCard />
      <div className="charts">
        <ExpensesBarChart data={[]} />
        <CategoryPieChart data={[]} />
        <BudgetComparisonChart data={[]} />
      </div>
    </div>
  );
};

export default Dashboard;

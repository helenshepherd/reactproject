import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [

  ];

  for (const expense of props.expenses) {
    chartDataPoints.push({ label: expense.title, value: expense.amount })
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;

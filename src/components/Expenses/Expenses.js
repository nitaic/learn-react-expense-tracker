import React, { useState } from 'react';

import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('');

  const selectExpenseDataHandler = (selectedExpenseYear) => {
    setSelectedYear(selectedExpenseYear);
    console.log(selectedExpenseYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectExpenseYear={selectExpenseDataHandler} />
        {props.expenses.map( (item) => <ExpenseItem title={item.title} amount={item.amount} date={item.date} /> )}
      </Card>
    </div>
  );
}

export default Expenses;
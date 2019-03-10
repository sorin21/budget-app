import React, { Component } from 'react';

import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesListFilters from '../ExpensesList/ExpensesListFilters/ExpensesListFilters';

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        <ExpensesListFilters />
        <ExpensesList />
      </div>
    );
  }
}

export default Dashboard;
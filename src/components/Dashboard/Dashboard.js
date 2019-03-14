import React, { Component } from 'react';

import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesListFilters from '../ExpensesList/ExpensesListFilters/ExpensesListFilters';
import Hoc from '../../playground/hoc';

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        <ExpensesListFilters />
        <ExpensesList />
        <Hoc isAdmin={false} info="There are the details" />
      </div>
    );
  }
}

export default Dashboard;
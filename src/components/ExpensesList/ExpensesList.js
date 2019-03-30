import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addExpense } from '../../actions/expensesActions';
import ExpensesListItem from './ExpensesListItem/ExpensesListItem';
import getVisibleExpenses from '../../common/GetVisibleExpense';

export class ExpensesList extends Component {
  // componentDidMount() {
  //   this.props.onAddExpense({ description: "Rent", amount: 500 })
  //   this.props.onAddExpense({ description: "Cofeee", amount: 300 })
  // }

  render() {
    return (
      <div>
        {this.props.expenses.length !== 0 ?
          (this.props.expenses.map(expense => {
            return <ExpensesListItem
              key={expense.id}
              expense={expense} />
          })) : (<p>No Expenses</p>)}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  }
}

const mapDispatchProps = dispatch => {
  return {
    onAddExpense: ({ description, amount }) => dispatch(addExpense({ description, amount })),
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ExpensesList);
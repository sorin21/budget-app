import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addExpense } from '../../actions/expensesActions';
import ExpensesListItem from './ExpensesListItem/ExpensesListItem';
import { getVisibleExpenses } from '../../common/GetVisibleExpense';

class ExpensesList extends Component {
  // componentDidMount() {
  //   this.props.onAddExpense({ description: "Rent", amount: 500 })
  //   this.props.onAddExpense({ description: "Cofeee", amount: 300 })
  // }

  render() {
    return (
      <div>
        <h1>Expenses List</h1>
        {this.props.expenses.length}
        {this.props.expenses.map(expense => {
          return <ExpensesListItem
            key={expense.id}
            id={expense.id}
            description={expense.description.description}
            createdAt={expense.description.createdAt}
            amount={expense.description.amount}
            note={expense.description.note} />
        })}
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log('state.filters', state.filters)
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  }
}

const mapDispatchProps = dispatch => {
  return {
    onAddExpense: ({ description, amount }) => dispatch(addExpense({ description, amount }))
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ExpensesList);
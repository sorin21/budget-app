import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addExpense } from '../../actions/expensesActions';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

class AddExpense extends Component {
  render() {
    return (
      <div>
        AddExpense with expenses
        <ExpenseForm
          // we add onSubmit here so we can use
          // the ExpenseForm in other places
          // the function is executed here
          // that is why we get back from ExpenseForm
          // the expense object
          onSubmit={(expense) => {
            this.props.onAddExpense(expense);
            this.props.history.push('/');
            // console.log(expense)
            // console.log(props)

          }} />
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  }
}

const mapDispatchProps = dispatch => {
  return {
    onAddExpense: (expense) => dispatch(addExpense(expense))
  }
}

export default connect(mapStateToProps, mapDispatchProps)(AddExpense);
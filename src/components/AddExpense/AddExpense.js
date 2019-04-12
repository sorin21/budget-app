import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addExpense } from '../../actions/expensesActions';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

export class AddExpense extends Component {

  daa() {
    console.log('this', this)
  }
  onSubmit = (expense) => {
    this.props.onAddExpense(expense);
    this.props.history.push('/');
    // console.log(expense)
    // console.log(this.props)
  }

  render() {
    return (
      <div>
        <h2>AddExpense with expenses</h2>
        <ExpenseForm
          // we add onSubmit here so we can use
          // the ExpenseForm in other places
          // the function is executed here
          // that is why we get back from ExpenseForm
          // the expense object
          onSubmit={this.onSubmit} />
        <hr />
      </div>
    );
  }
}


const mapDispatchProps = dispatch => {
  return {
    onAddExpense: (expense) => dispatch(addExpense(expense))
  }
}

export default connect(null, mapDispatchProps)(AddExpense);
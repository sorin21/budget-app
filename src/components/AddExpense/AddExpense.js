import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addExpense } from '../../actions/expensesActions';

class AddExpense extends Component {
  render() {
    console.log('this.props.expenses', this.props)
    return (
      <div>
        AddExpense with expenses
        <hr />
        <button onClick={this.props.onAddExpense}>Expenses</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.expenses)
  return {
    expenses: state.expenses.expenses
  }
}

const mapDispatchProps = dispatch => {
  return {
    onAddExpense: () => dispatch(addExpense({ description: "Rent", amount: 100 }))
  }
}

export default connect(mapStateToProps, mapDispatchProps)(AddExpense);
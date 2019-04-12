import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { editExpense, removeExpense } from '../../actions/expensesActions';

export class EditExpense extends Component {
  onSubmit = (expense) => {
    this.props.onEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onRemoveExpense = () => {
    this.props.onRemoveExpense(this.props.expense.id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemoveExpense}
        >Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      // console.log('this.props', expense.description)
      // returns true when finds a match
      return expense.id === props.match.params.id;
    })
  }
}

const mapDispatchProps = dispatch => {
  return {
    onEditExpense: (id, expense) => dispatch(editExpense(id, expense)),
    onRemoveExpense: (id) => dispatch(removeExpense({ id }))
  }
}

export default connect(mapStateToProps, mapDispatchProps)(EditExpense);
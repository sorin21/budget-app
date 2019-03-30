import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { editExpense, removeExpense } from '../../actions/expensesActions';
const EditExpense = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.onEditExpense(props.expense.id, expense);
          props.history.push('/');
        }}
      />
      <button
        onClick={() => {
          props.onRemoveExpense(props.expense.id);
          props.history.push('/');
        }}
      >Remove</button>
    </div>
  );
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
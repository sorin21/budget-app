import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import numeral from "numeral";
import moment from 'moment';

import { removeExpense } from '../../../actions/expensesActions';


class ExpensesListItem extends Component {
  render() {
    const { id, description, amount, createdAt, note } = this.props.expense;
    return (
      <div>
        <Link to={`/edit/${id}`}>
          <h3>Description: {description}</h3>
        </Link>
        <p>Amount: {numeral(amount).format('0,0.00')}</p>
        <p>Created At: {moment(createdAt).format('MMMM Do, YYYY HH:mm')}</p>
        {note && <p>Note: {note}</p>}
        <button
          onClick={() => {
            this.props.onRemoveExpense(id);
            this.props.history.push('/');
          }}
        >Remove</button>
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
    onRemoveExpense: (id) => dispatch(removeExpense({ id }))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchProps)(ExpensesListItem));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from "numeral";
import moment from 'moment';

import { removeExpense } from '../../../actions/expensesActions';


class ExpensesListItem extends Component {
  render() {
    // { id, description, amount, createdAt, note } = this.props;
    return (
      <div>
        <Link to={`/edit/${this.props.id}`}>
          <h3>Description: {this.props.description}</h3>
        </Link>
        <p>Amount: {numeral(this.props.amount).format('0,0.00')}</p>
        <p>Created At: {moment(this.props.createdAt).format('MMMM Do, YYYY HH:mm')}</p>
        {this.props.note && <p>Note: {this.props.note}</p>}
        <button onClick={() => this.props.onRemoveExpense(this.props.id)}>Remove</button>
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
    onRemoveExpense: (id) => dispatch(removeExpense(id))
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ExpensesListItem);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortbyAmount, sortbyDate } from '../../../actions/filtersActions';

class ExpensesListFilters extends Component {
  searchHandler = (event) => {
    const target = event.target.value
    this.props.onSetTextFilter(target);
  }
  selectHandler = (event) => {
    const target = event.target.value
    if (target === 'date') {
      this.props.onSortbyDate();
      console.log('this props date', this.props.onSortbyDate())
    } else if (target === 'amount') {
      this.props.onSortbyAmount();
      console.log('this props amount', this.props.onSortbyAmount())
    }
  }
  render() {
    return (
      <div>
        <h1>Expenses List Filters</h1>
        <input type="text" value={this.props.filters.text} onChange={this.searchHandler} />
        <select
          value={this.props.filters.sortBy}
          onChange={this.selectHandler}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    filters: state.filters
  }
}

const mapDispatchProps = dispatch => {
  return {
    onSetTextFilter: (text) => dispatch(setTextFilter(text)),
    onSortbyDate: () => dispatch(sortbyDate()),
    onSortbyAmount: () => dispatch(sortbyAmount())
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ExpensesListFilters);

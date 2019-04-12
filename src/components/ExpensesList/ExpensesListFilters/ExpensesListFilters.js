import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'

import { setTextFilter, sortbyAmount, sortbyDate, setStartDate, setEndDate } from '../../../actions/filtersActions';

export class ExpensesListFilters extends Component {
  state = {
    calendarFocused: null
  };

  searchHandler = (event) => {
    const target = event.target.value
    this.props.onSetTextFilter(target);
  }

  selectHandler = (event) => {
    const target = event.target.value
    if (target === 'date') {
      this.props.onSortbyDate();
    } else if (target === 'amount') {
      this.props.onSortbyAmount();
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.onStartDate(startDate);
    this.props.onEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

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
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          // method above
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          // method above
          onFocusChange={this.onFocusChange}
          startDateId={this.props.filters.text}
          endDateId={this.props.filters.text}
          // only one month per calendar
          numberOfMonths={1}
          // to anable the dates in past
          isOutsideRange={() => false}
          // add a X to clear dates
          showClearDates={true}
          displayFormat="DD/MM/YYYY"
        />
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
    onSortbyAmount: () => dispatch(sortbyAmount()),
    onStartDate: (startDate) => dispatch(setStartDate(startDate)),
    onEndDate: (endDate) => dispatch(setEndDate(endDate))
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ExpensesListFilters);

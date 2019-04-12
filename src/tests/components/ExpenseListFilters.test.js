import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { filters, altFilters } from '../../common/filters';
import { ExpensesListFilters } from '../../components/ExpensesList/ExpensesListFilters/ExpensesListFilters';

// expects this.props.filters, this.props.filters.text, this.props.filters.sortBy, 
// this.props.filters.startDate, this.props.filters.endDate
// and 4 methods to test
// onSortChange has two if so we test both
let onSetTextFilter, onSortbyDate, onSortbyAmount, onStartDate, onEndDate, onFocusChange, wrapper;

beforeEach(() => {
  onSetTextFilter = jest.fn();
  onSortbyDate = jest.fn();
  onSortbyAmount = jest.fn();
  onStartDate = jest.fn();
  onEndDate = jest.fn();
  wrapper = shallow(<ExpensesListFilters
    filters={filters}
    onSetTextFilter={onSetTextFilter}
    onSortbyDate={onSortbyDate}
    onSortbyAmount={onSortbyAmount}
    onStartDate={onStartDate}
    onEndDate={onEndDate} />);
})

test('should render ExpensesListFilters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesListFilters with alt data', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
});

test('should handle searchHandler searched text', () => {
  const value = 'bills'
  wrapper.find('input').simulate('change', {
    target: { value }
  })
  expect(onSetTextFilter).toHaveBeenLastCalledWith(value);
})

test('should handle selectHandler sort by date', () => {
  const value = 'date';
  // in altFilters we have amount selected
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(onSortbyDate).toHaveBeenCalled();
})

test('should handle selectHandler sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(onSortbyAmount).toHaveBeenCalled();
})

test('should handle onDatesChange', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  // access DateRangePicker props
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
  expect(onStartDate).toHaveBeenLastCalledWith(startDate);
  expect(onEndDate).toHaveBeenLastCalledWith(endDate);
})

test('should handle onFocusChange', () => {
  // could be null, startDate, endDate
  // depending witch one is focused
  const calendarFocused = 'endDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  // state changed
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})

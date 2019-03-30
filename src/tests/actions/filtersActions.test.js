import moment from 'moment';

import { setTextFilter, setStartDate, setEndDate, sortbyDate, sortbyAmount } from '../../actions/filtersActions';

test('should set up text filter action object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'TEXT_FILTER',
    text: ''
  })
})

test('should set up text filter action object with provided values', () => {
  const text = 'Rent'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'TEXT_FILTER',
    text
  })
})

test('should set up sort by date filter action object', () => {
  const action = sortbyDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('should set up sort by amount filter action object', () => {
  const action = sortbyAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('should set up start date filter action object', () => {
  // moment(0) = January 1st 1970
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'START_DATE',
    startDate: moment(0)
  })
})

test('should set up end date filter action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'END_DATE',
    endDate: moment(0)
  })
})

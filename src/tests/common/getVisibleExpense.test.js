import moment from 'moment';

import GetVisibleExpense from '../../common/GetVisibleExpense';
import expenses from '../../common/expenses';


test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = GetVisibleExpense(expenses, filters);
  // 'e' se gaseste doar in primul si utimul obiect description
  expect(result).toEqual([expenses[2], expenses[1]])
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = GetVisibleExpense(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  }
  const result = GetVisibleExpense(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]])
})

test('should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = GetVisibleExpense(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should filter by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = GetVisibleExpense(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})
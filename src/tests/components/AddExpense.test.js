import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../../common/expenses';
import { AddExpense } from '../../components/AddExpense/AddExpense';

let onAddExpense, history, wrapper;

// run this before each test case
beforeEach(() => {
  onAddExpense = jest.fn();
  history = { push: jest.fn() };
  // render the AddExpense
  wrapper = shallow(<AddExpense history={history} onAddExpense={onAddExpense} />);
})

// AddExpense expects 2 props: onAddExpense and history
test('should render AddExpense', () => {
  expect(wrapper).toMatchSnapshot();
});

// When the form gets submitted we need to make sure that
// both spyes are called with correct information
test('should handle onSubmit', () => {
  // call the function, onSubmit,  that is passed to ExpenseForm
  // so call it with the correct data, one expense object, expense[1]
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])

  // we aspect that history.push spy to be called with the string '/'
  expect(history.push).toHaveBeenCalledWith('/');
  expect(onAddExpense).toHaveBeenCalledWith(expenses[1])
});
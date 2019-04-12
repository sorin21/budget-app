import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../../common/expenses';
import { EditExpense } from '../../components/Edit/EditExpense';

let onEditExpense, onRemoveExpense, history, wrapper;

// run this before each test case
beforeEach(() => {
  onEditExpense = jest.fn();
  onRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  // render the EditExpense
  wrapper = shallow(<EditExpense
    history={history}
    onEditExpense={onEditExpense}
    onRemoveExpense={onRemoveExpense}
    expense={expenses[2]} />);
})

// EditExpense expects 2 props: onEditExpense and history
test('should render EditExpense', () => {
  expect(wrapper).toMatchSnapshot();
});


// When the form gets submitted we need to make sure that
// both spyes are called with correct information
test('should handle onSubmit', () => {
  // call the function, onSubmit,  that is passed to ExpenseForm
  // so call it with the correct data, one expense object, expense[1]
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])

  // we aspect that history.push spy to be called with the string '/'
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
});


test('should handle onClick', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onRemoveExpense).toHaveBeenLastCalledWith(expenses[2].id);
});
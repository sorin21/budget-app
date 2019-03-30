import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../../common/expenses';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';

test('should render ExpenseForm with default values', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with an expense', () => {
  const wrapper = shallow(<ExpenseForm {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
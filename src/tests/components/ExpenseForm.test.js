import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../../common/expenses';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';

test('should render ExpenseForm with default values', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with an expense', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});
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

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  // simulate submitting the form
  // could be click, change
  // we choose submit because form has onSubmit event
  // we can simulate the event from event.preventDefault()
  // so the 2nd art, the obj, is the event
  wrapper.find('form').simulate('submit', { preventDefault: () => { } })
  // if it is zero the test will fail
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});
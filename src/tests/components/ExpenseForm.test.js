import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

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
  // could be click, change, so we have to simulate these events
  // we choose submit because form has onSubmit event
  // we can simulate the event from event.preventDefault()
  // so the 2nd arg, the obj, is the event from (event)
  wrapper.find('form').simulate('submit', { preventDefault: () => { } })
  // if it is zero the test will fail
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New description to test'
  // render the expense form to change the input
  const wrapper = shallow(<ExpenseForm />);
  // match the 1st input, the one for description, that we want to test
  wrapper.find('input').at(0).simulate('change', { target: { value } })
  // wrapper.find('input').simulate('submit', { preventDefault: () => { } })
  // if it is zero the test will fail
  expect(wrapper.state('description')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('should set note on textarea change', () => {
  const value = 'This is a new note'
  // render the expense form to change the input
  const wrapper = shallow(<ExpenseForm />);
  // match the 1st input, the one for description, that we want to test
  wrapper.find('textarea').at(0).simulate('change', { target: { value } })
  // wrapper.find('input').simulate('submit', { preventDefault: () => { } })
  // if it is zero the test will fail
  expect(wrapper.state('note')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('should set amount if valid input', () => {
  const amount = '23.50'
  // render the expense form to change the input
  const wrapper = shallow(<ExpenseForm />);
  // match the 1st input, the one for description, that we want to test
  wrapper.find('input').at(1).simulate('change', { target: { value: amount } })
  // wrapper.find('input').simulate('submit', { preventDefault: () => { } })
  // if it is zero the test will fail
  expect(wrapper.state('amount')).toBe(amount);
  expect(wrapper).toMatchSnapshot();
});

test('should not set amount if invalid input', () => {
  // invalid input becasue has 3 decimals after the dot
  const amount = '23.505'
  // render the expense form to change the input
  const wrapper = shallow(<ExpenseForm />);
  // match the 1st input, the one for description, that we want to test
  wrapper.find('input').at(1).simulate('change', { target: { value: amount } })
  // if it is zero the test will fail
  expect(wrapper.state('amount')).toBe('');
  expect(wrapper).toMatchSnapshot();
});


test('should call onSubmit prop for valid form submission demonstration', () => {
  //  jest.fn creates a new spy with fake functions and we can make assertions about them
  const onSubmitSpy = jest.fn();
  onSubmitSpy('Sorin', 'Romania');
  // this toHaveBeenCalled() assertion will throw an error if the spy was never called
  // and the test will pass if the spy was called
  expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  expect(onSubmitSpy).toHaveBeenCalledWith('Sorin', 'Romania');
});

// We need to male sure that onSubmit is called with correct data
// These makes sure that when we have a valid data the error gets cleared
// and the prop onSubmit gets called with all data
test('should call onSubmit prop for valid form submission', () => {
  // 1. Creates a new spy with fake functions:  jest.fn 
  const onSubmitSpy = jest.fn();
  // 2. Render the expense form with valid data, so we pick one expense
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  // 3. Simulate the submission
  wrapper.find('form').simulate('submit', { preventDefault: () => { } });
  // 4. Make sure that state was cleared
  // form was submitted so now the error should be an empty string
  // wrapper.setState({ error: 'There is an error' });
  expect(wrapper.state('error')).toBe('');
  // 5. we need to make sure that onSubmit was called with the object wiht all keys: note, desc, etc
  // with the correctly formated information(toHaveBeenLastCalledWith)
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note
  });
});

test('should set new date on date change for createdAt', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  // call what comes back (moment()), this is the actual handler
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  // wrapper
  //   .findWhere(n => {
  //     return n.name() && n.name().includes('SingleDatePicker');
  //   })
  //   .prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set focus on focus change for calendarFocused', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});

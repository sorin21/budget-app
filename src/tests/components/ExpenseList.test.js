import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesList } from '../../components/ExpensesList/ExpensesList';
import expenses from '../../common/expenses';

test('should render ExpenseList component with expenses', () => {
  const wrapper = shallow(<ExpensesList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseList component with no expenses', () => {
  const wrapper = shallow(<ExpensesList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
})
import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../../common/expenses';
import { ExpensesListItem } from '../../components/ExpensesList/ExpensesListItem/ExpensesListItem';

test('should render ExpensesListItem component', () => {
  const wrapper = shallow(<ExpensesListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
})
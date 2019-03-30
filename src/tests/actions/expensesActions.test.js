import { addExpense, editExpense, removeExpense } from '../../actions/expensesActions';

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: 'abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc'
  })
})

test('should set up edit expense action object', () => {
  const action = editExpense('abc', { note: 'This is a new note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc',
    updates: {
      note: 'This is a new note'
    }
  })
})

test('should set up add expense action object with provided values', () => {
  const expenseData = { description: 'Rent', note: 'Rent for this month', amount: 300, createdAt: 1000 };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should set up add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})
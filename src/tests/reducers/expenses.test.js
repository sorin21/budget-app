import expensesReducer from "../../reducers/expensesReducer";
import expenses from '../../common/expenses';

test('should test default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  // we expect back an array with 2 items: 0 and 2, because we removed 1
  expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    // random id that does not exist
    id: '123'
  }
  const state = expensesReducer(expenses, action);
  // we expect back the expenses array with all 3 items unchanged
  expect(state).toEqual(expenses);
})

test('should add an expense', () => {
  const expense = {
    id: '100',
    description: 'Car wash',
    note: '',
    amount: 50,
    createdAt: 5000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
})

test('should edit an expense', () => {
  const description = 'Gum for fun';
  const updates = {
    description
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(description);
})

test('should not edit an expense if id not found', () => {
  const description = 'Ala bala portocala';
  const updates = {
    description
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '123',
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})
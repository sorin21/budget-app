import uuid from 'uuid';

// ADD_EXPENSE
// destruct the arguments
// if non exist will be egual to empty object
// description and note will have a default value 
// if non was provided by the user
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const addExpense = (description = '', note = '', amount = 0, createdAt = 0) => {
  return {
    type: ADD_EXPENSE,
    id: uuid(),
    note,
    description,
    amount,
    createdAt
  }
}

// REMOVE_EXPENSE
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const removeExpense = (id) => {
  return {
    type: REMOVE_EXPENSE,
    id: id
  }
}

// EDIT_EXPENSE
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const editExpense = (id, updates) => {
  return {
    type: EDIT_EXPENSE,
    id,
    updates
  }
}

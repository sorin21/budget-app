import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from '../actions/expensesActions';

// 550.00 dollar is 55000 pennies
const initialState = []

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
        action.expense
      ];

    case REMOVE_EXPENSE:
      return state.filter((expense) => {
        return expense.id !== action.id;
      });

    case EDIT_EXPENSE:
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            // add all expense
            ...expense,
            // and overwrites with the new ones
            ...action.updates
          }
        }
        return expense;
      })

    default:
      return state;
  }
}

export default expensesReducer;
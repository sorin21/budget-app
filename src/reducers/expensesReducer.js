import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from '../actions/expensesActions';
import { getVisibleExpenses } from '../common/GetVisibleExpense';

// 550.00 dollar is 55000 pennies
const initialState = {
  expenses: []
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      const newExpense = {
        id: action.id,
        description: action.description,
        note: action.note,
        amount: action.amount,
        createdAt: action.createdAt
      }
      return {
        ...state,
        expenses: state.expenses.concat(newExpense)
      };
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => {
          return expense.id !== action.id
        })
      };

    case EDIT_EXPENSE:
      return state.expenses.map(expense => {
        if (expense.id === action.id) {
          return {
            // add all expense
            ...expense,
            // and overwrites with the new ones
            ...action.updates
          }
        }
      })

    default:
      return state;
  }
}

export default expensesReducer;
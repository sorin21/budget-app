import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import { addExpense } from './actions/expensesActions';
import reducer from './reducers';
import './index.css';
import 'react-dates/lib/css/_datepicker.css';

import App from './App';



const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// store.subscribe(() => {
//   console.log("store.getState()", store.getState())
// })
// store.dispatch(setTextFilter('water'))
store.dispatch(addExpense({ description: 'Water Bill', amount: 200, note: 'This bill is for this month' }))
store.dispatch(addExpense({ description: 'Coffee water', createdAt: 100 }))
store.dispatch(addExpense({ description: 'Rent', amount: 109100, note: 'This bill is for last day' }))


// store.dispatch(sortbyAmount())
// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee with water', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999)); // endDate 1250
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

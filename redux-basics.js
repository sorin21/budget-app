const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

const increment = () => {
  return { type: 'INCREMENT' }
}

const decrement = () => {
  return { type: 'DECREMENT' }
}

// if incrementBy exist use its value 10, if not use default 8
const add = ({ incrementBy = 7 } = {}) => {
  return {
    type: 'ADD',
    // payload: typeof value.incrementBy === 'number' ? value.incrementBy : 7
    // payload: typeof incrementBy === 'number' ? incrementBy : 7
    payload: incrementBy
  }
}

const reset = () => {
  return { type: 'RESET' }
}

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }

    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }

    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.payload
      }

    case 'RESET':
      return {
        ...state,
        counter: 0
      }
    default:
      return state;
  }
}

// Store
const store = createStore(rootReducer);

console.log(store.getState())
store.subscribe(() => {
  console.log('Subscription', store.getState())
});

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())
store.dispatch(add({ incrementBy: 10 }))

console.log(store.getState())
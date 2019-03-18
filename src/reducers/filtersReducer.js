import { TEXT_FILTER, SORT_BY_AMOUNT, SORT_BY_DATE, START_DATE, END_DATE } from '../actions/filtersActions';

const initialState = {
  // filters: {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  // }
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: "amount"
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: "date"
      };
    case START_DATE:
      return {
        ...state,
        startDate: action.startDate
      };
    case END_DATE:
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
}

export default filtersReducer;
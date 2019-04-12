import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null
}

const altFilters = {
  text: 'rent',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
}

export { filters, altFilters };
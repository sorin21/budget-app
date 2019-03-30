import moment from 'moment';
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  // console.log('expenses', expenses)
  // console.log('filtersS', filters)
  return expenses.filter(expense => {
    // console.log('expense', expense)
    // true for non numbers
    // const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
    const createdAtMoment = moment(expense.createdAt);
    // if no starDate we not filter, so return true
    // check id start day is the same or before createdAt
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
    // const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;

    const textMatch = expense.description.toString().toLowerCase().includes(text.toString().toLowerCase());

    // return true if all 3 are true, so if all true the item will be kept in array
    // return an array
    return startDateMatch && endDateMatch && textMatch;
    // return startDateMatch && endDateMatch
  })
    // return the above array filtered
    .sort((a, b) => {
      if (sortBy === "date") {
        // show the latest date
        return a.createdAt > b.createdAt ? -1 : 1;
      }
      if (sortBy === "amount") {
        return a.amount > b.amount ? -1 : 1;
      }
      return false;
    });
};

export default getVisibleExpenses;  
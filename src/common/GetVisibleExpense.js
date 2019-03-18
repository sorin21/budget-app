import moment from 'moment';

export const getVisibleExpenses = (expenses, filters) => {
  console.log('expenses', expenses)
  console.log('filtersS', filters)
  return expenses.expenses.filter(expense => {
    // console.log('expense', expense)
    // true for non numbers
    // const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
    const createdAtMoment = moment(expense.description.createdAt);
    // if no starDate we not filter
    // check id start day is the same or before createdAt
    const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(createdAtMoment, "day") : true;
    // const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
    const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(createdAtMoment, "day") : true;

    const textMatch = expense.description.description.toString().toLowerCase().includes(filters.text.toString().toLowerCase());

    // return true if all 3 are true, so if all true the item will be kept in array
    // return an array
    return startDateMatch && endDateMatch && textMatch;
    // return startDateMatch && endDateMatch
  })
    // return the above array filtered
    .sort((a, b) => {
      if (filters.sortBy === "date") {
        // 1 b comes first and -1 a comes first
        return a.createdAt < b.createdAt ? -1 : 1;
      }
      if (filters.sortBy === "amount") {
        return a.amount < b.amount ? -1 : 1;
      }
    });
};

// export default getVisibleExpenses;  
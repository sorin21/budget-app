import moment from 'moment';

export const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    // true for non numbers
    // const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
    const createdAtMoment = moment(expense.createdAt);
    console.log('createdAtMoment', createdAtMoment)
    // if no starDate we not filter
    // check id start day is the same or before createdAt
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
    console.log('startDateMatch', startDateMatch)
    // const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
    console.log('endDateMatch', endDateMatch)

    const textMatch = expense.description.toString().toLowerCase().includes(text.toString().toLowerCase());
    console.log('textMatch', textMatch)

    // return true if all 3 are true, so if all true the item will be kept in array
    // return an array
    return startDateMatch && endDateMatch && textMatch;
  })
    // return the above array filtered
    .sort((a, b) => {
      if (sortBy === "date") {
        // 1 b comes first and -1 a comes first
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// export default getVisibleExpenses;  
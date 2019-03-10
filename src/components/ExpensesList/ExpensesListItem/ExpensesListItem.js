import React from 'react';
import { Link } from 'react-router-dom';
import numeral from "numeral";

const ExpensesListItem = (props) => {
  return (
    <div>
      <Link to={`/edit/${props.id}`}>
        <h3>{props.description}</h3>
      </Link>
      <p>Amount: {numeral(props.amount).format('0,0.00')}</p>
      {/* <p>Created At: {moment(props.expense.createdAt).format('MMMM Do, YYYY HH:mm')}</p> */}
      {/* <p>Note: {props.expense.note}</p> */}
    </div>
  );
};

export default ExpensesListItem;
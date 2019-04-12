import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();
// const now = moment();
// console.log('now', now.format('DD MMM YYYY'))

class ExpenseForm extends Component {
  state = {
    description: this.props.expense ? this.props.expense.description : '',
    note: this.props.expense ? this.props.expense.note : '',
    // convert it to string
    amount: this.props.expense ? (this.props.expense.amount).toString() : '',
    // createdAt now, this moment
    createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
    calendarFocused: false,
    error: ''
  };

  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState({ description });
  }

  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState({ note });
  }

  onAmountChange = (event) => {
    const amount = event.target.value;
    // we use !amount so the user can select
    // the amount and delete it, because when we added this {1,}
    // the reg exp no longer matches an empty string
    // starts witd decimals
    // at least one number(to infinity) and not with .
    // then we have a .
    // then we have only 2 decimals in the end
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      // if will be an invalid data, amount will be ''
      this.setState(() => ({ amount }));
    }
  }

  onDateChange = (createdAt) => {
    // we put if() so the user now will not be able
    // to delete the date from input
    if (createdAt) {
      this.setState({ createdAt })
    }

  }

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  }

  onSubmit = (event) => {
    event.preventDefault();
    // if no desc and amount
    if (!this.state.description || !this.state.amount) {
      this.setState({
        error: 'Please provide description and amount'
      });
    } else {
      this.setState({ error: '' });
      const newExpense = {
        description: this.state.description,
        // we work in base 10 and *100 to transfor from cents
        amount: parseFloat(this.state.amount, 10),
        // to trasf in miliseconds use the valueOf()
        // method from  moment website
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      }
      this.props.onSubmit(newExpense);
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange} />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            // see only one month displayed
            numberOfMonths={1}
            // make days in past available
            isOutsideRange={() => false}
            displayFormat="DD MM YYYY"
          />
          <textarea
            placeholder="Add a note for your expense"
            value={this.state.note}
            onChange={this.onNoteChange} ></textarea>
          <button>Add Expense </button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
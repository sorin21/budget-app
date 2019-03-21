import React, { Component } from 'react';

class  ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

  onDescriptionChange = (event) => {
     const description = event.target.value;
     this.setState({description });
  }

  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState({note});  
  }

  onAmountChange = (event) => {
    const amount = event.target.value;
    // we use !amount so the user can select
    // the amount and delete it
    // starts witd decimals
    // at least one number(to infinity) and not with .
    // then we have a .
    // then we have only 2 decimals in the end
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }
  render() {
    return (
      <div>
        <form>
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

export default  ExpenseForm;
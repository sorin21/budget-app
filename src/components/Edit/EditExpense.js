import React, { Component } from 'react';

class EditExpense extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        EditExpense with id {this.props.match.params.id}
      </div>
    );
  }
}

export default EditExpense;
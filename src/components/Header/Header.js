import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import classes from './Header.css'


class Header extends Component {
  render() {
    return (
      <header>
        <h1>Income and expenses</h1>
        <NavLink activeClassName={classes.active} to="/" exact>Home</NavLink>
        <NavLink activeClassName={classes.active} to="/create">Add Expense</NavLink>
        <NavLink activeClassName={classes.active} to="/edit">Edit Expense</NavLink>
      </header>
    );
  }
}

export default Header;
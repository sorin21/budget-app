import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Dashboard from './components/Dashboard/Dashboard';
import AddExpense from './components/AddExpense/AddExpense';
import EditExpense from './components/Edit/EditExpense';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Hoc from './playground/hoc'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/create" component={AddExpense} />
          <Route path="/hoc" component={Hoc} />
          <Route path="/edit/:id" component={EditExpense} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

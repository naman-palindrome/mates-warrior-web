import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Auth/Login';
import PrivateRoute from '../../containers/PrivateRoute'
import Dashboard from '../Dashboard';
import CustomModal from '../Dashboard/CustomModal';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/check" exact component={CustomModal} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

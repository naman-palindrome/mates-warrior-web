import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Auth/Login';
import PrivateRoute from '../../containers/PrivateRoute'
import Dashboard from '../Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        {/* <PrivateRoute path="/" exact component={Dashboard} /> */}
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

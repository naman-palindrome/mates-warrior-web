import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../../../store/AuthContext';
import PrivateRoute from "../../containers/PrivateRoute";
import Login from '../Auth/Login';
import Dashboard from '../Dashboard';
import Donors from '../Donors';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/donors" exact component={Donors} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

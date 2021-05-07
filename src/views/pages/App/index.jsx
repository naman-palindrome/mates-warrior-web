import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { auth } from "../../../firebase";
import Login from '../Auth/Login';
import Dashboard from '../Dashboard';
import Donors from '../Donors';
import PrivateRoute from "../../containers/PrivateRoute"
import { AuthProvider } from '../../../store/AuthContext';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/" exact component={Dashboard} />
          <PrivateRoute path="/donors" exact component={Donors} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

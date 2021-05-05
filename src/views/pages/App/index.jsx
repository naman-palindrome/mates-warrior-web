import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Auth/Login';
import PrivateRoute from '../../containers/PrivateRoute'
import Dashboard from '../Dashboard';
import CustomModal from '../Dashboard/CustomModal';
import { auth } from "../../../firebase";
import { setCurUser, userLogin } from '../../../store/auth';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      dispatch(setCurUser(user));
    })
    return unsubscribe;
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/check" exact component={CustomModal} />
        <PrivateRoute path="/" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

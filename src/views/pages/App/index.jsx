import { Box } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { auth } from "../../../firebase";
import { setCurUser } from '../../../store/auth';
import PrivateRoute from '../../containers/PrivateRoute';
import Login from '../Auth/Login';
import Dashboard from '../Dashboard';
import DonorList from '../DonorDataDisplay/DonorList';
import Donors from '../Donors';


function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     dispatch(setCurUser(user));
  //   })
  //   return unsubscribe;
  // }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Dashboard} />
        <Route path="/donors" exact component={Donors} />
        <Route path="/donorlist" exact component={DonorList} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router'

export default function PrivateRoute({ component: Component, ...rest }) {

  const { isAuthenticated } = useSelector(s => s.auth);
  console.log(isAuthenticated);

  return (
    <Route {...rest}
      render={props => (isAuthenticated ?
        <Component {...props} />
        :
        <Redirect to="/login" />
      )}
    />
  )
}

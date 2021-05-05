import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router'

export default function PrivateRoute({ component: Component, ...rest }) {

  const { currentUser } = useSelector(s => s.auth);

  return (
    <Route {...rest}
      render={props => (!!currentUser ?
        <Component {...props} />
        :
        <Redirect to="/login" />
      )}
    />
  )
}

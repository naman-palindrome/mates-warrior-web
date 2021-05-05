import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router'

export default function PrivateRoute({ component: Component, ...rest }) {

  const authenticated = true;

  return (
    <Route {...rest}
      render={props => (authenticated ?
        <Component {...props} />
        :
        <Redirect to="/" />
      )}
    />
  )
}

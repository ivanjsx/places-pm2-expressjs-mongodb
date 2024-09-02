import React from 'react';
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
  return (
    <Route exact>
      {
        () => props.loggedIn ? <Component {...props} /> : <Navigate to="./signin" />
      }
    </Route>
)}

export default ProtectedRoute;
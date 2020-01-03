import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import previewRoutes from './PreviewRoutes';
import Login from './PreviewLogin';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    render={props =>
      isAuthenticated === true ? (
        <Component {...props} {...rest} data={props.data} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleAuth = () => {
    console.log('test');
    setIsAuthenticated(true);
  };
  return (
    <Switch>
      <Route
        path="/login"
        render={props => (
          <Login
            {...props}
            handleAuth={handleAuth}
            isAuthenticated={isAuthenticated}
          />
        )}
      />
      {previewRoutes.map(({ path, exact, component: C, ...rest }) => (
        <PrivateRoute
          key={path}
          path={path}
          exact={exact}
          component={C}
          isAuthenticated={isAuthenticated}
          {...rest}
        />
      ))}
    </Switch>
  );
};

export default Routes;

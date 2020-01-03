import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../routes';
import Login from './PreviewLogin';

const PrivateRoute = ({
  path,
  exact,
  C,
  isAuthenticated,
  pathAuthenticated,
  ...rest
}) => (
  <Route
    key={path}
    path={path}
    exact={exact}
    render={props =>
      isAuthenticated === true ? (
        <C
          {...props}
          {...rest}
          data={props.data}
          pathAuthenticated={pathAuthenticated}
        />
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

const Routes = props => {
  const [pathAuthenticated, setPathAuthenticated] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const handleAuth = path => {
    setIsAuthenticated(true);
    setPathAuthenticated(path);
  };

  //   useEffect(() => {
  console.log(pathAuthenticated);
  console.log(props.history.location.pathname);
  console.log(props);
  //   if (
  //     props &&
  //     props.history &&
  //     props.history.location &&
  //     props.history.location.pathname &&
  //     pathAuthenticated !== props.history.location.pathname.slice(1)
  //   ) {
  //     setIsAuthenticated(false);
  //   }
  //   });

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
      {routes.map(({ path, exact, component: C, ...rest }) => (
        <PrivateRoute
          path={path}
          exact={exact}
          C={C}
          isAuthenticated={isAuthenticated}
          pathAuthenticated={pathAuthenticated}
          {...rest}
        />
      ))}
    </Switch>
  );
};

export default Routes;

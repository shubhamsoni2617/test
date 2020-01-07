import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../routes';
import Login from './PreviewLogin';
import { withRouter } from 'react-router-dom';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleAuth = path => {
    setIsAuthenticated(true);
    setPathAuthenticated(path);
  };

  useEffect(() => {
    let pathName = props.location.pathname;
    if (pathName.length > 1) {
      pathName = pathName.slice(1);
    }
    if (pathAuthenticated && pathAuthenticated !== pathName) {
      setIsAuthenticated(false);
    }
  }, [props.location.pathname]);

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

export default withRouter(Routes);

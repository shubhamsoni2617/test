import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../routes';

const Routes = ({ match, previewDate }) => {
  return (
    <Switch>
      {routes.map(({ path, exact, component: C, ...rest }) => {
        return (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={props => (
              <C
                {...props}
                {...rest}
                data={props.data}
                previewDate={previewDate}
              />
            )}
          />
        );
      })}
      {/*  <Route render={(props) => <NoMatch {...props} />} /> */}
    </Switch>
  );
};

export default Routes;

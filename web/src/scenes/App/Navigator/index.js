import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../../Home";
import Event from "../../Event";

const Routes = ({ match }) => {
  return (
    
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/event" component={Event} />
        </Switch>
    
  );
};

export default Routes;

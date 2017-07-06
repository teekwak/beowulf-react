import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import NotFound from './NotFound';
import StatusCheckerContainer from './features/status/StatusCheckerContainer';

const Routes = () => (
  <BrowserRouter>
  	<Switch>
	    <Route exact path="/" component={App} />
	    <Route path="/status" component={StatusCheckerContainer} />
	    <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

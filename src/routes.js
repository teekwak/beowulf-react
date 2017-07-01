import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import App from './App';

const Routes = () => (
  <BrowserRouter>
  	<Switch>
	    <Route exact path="/" component={App.Home} />
	    <Route path="/about" component={App.About} />
	    <Route component={App.NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
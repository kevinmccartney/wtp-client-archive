import 'babel-polyfill';

import React from 'react';
import { hydrate, Switch, Route } from 'react-dom';

import routes from './routes';

import NotFound from './views/NotFound';

const Router = () => (
  <Switch>
    {routes.map(({
      path,
      exact,
      component: Component,
      ...rest
    }) => (
      <Route
        key={path}
        path={path}
        exact={exact}
        render={props => (
          <Component {...props} {...rest} />
        )}
      />
    ))}
    <Route render={props => <NotFound {...props} />} />
  </Switch>
);

hydrate(<Router />, document.querySelector('#app'));

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import DefaultRoute from './components/DefaultRoute';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom.css';

import Home from './views/Home';
import GeoLocations from './views/GeoLocations';
import Login from './views/Login';
import SignUp from './views/SignUp';

const MenuItems = () => {
  return (
    <div className="container">
      <Switch>
        <DefaultRoute exact path="/" component={Home} />
        <DefaultRoute
          exact
          path="/geolocation"
          component={GeoLocations}
        />
        <DefaultRoute exact path="/login" component={Login} />
        <DefaultRoute exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

render(
  <BrowserRouter>
    <MenuItems />
  </BrowserRouter>,
  document.getElementById('root'),
);

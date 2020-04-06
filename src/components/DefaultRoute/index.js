import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header';

const DefaultRoute = props => {
  /* define lower case compoent as ReactJS expects objects in upper case */
  /* remainingRouteProps is all of the rest of the properties that DefaultRoute has */
  const { component: Component, ...remainingRouteProps } = props;

  return (
    /* Render causes the route to render whatever is returned by the anonymous function given the render prop */
    <Route
      {...remainingRouteProps}
      render={() => {
        return (
          <div>
            <Header />
            <Component {...props} />
          </div>
        );
      }}
    />
  );
};

DefaultRoute.propTypes = {
  component: PropTypes.func,
};

export default DefaultRoute;

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const closeNavbar = () => setCollapsed(true);

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossOrigin="anonymous"
        />

        <title>TIK World</title>
        <link rel="canonical" href="https://tikworld.ga" />
      </Helmet>
      <Navbar color="info" light expand="md" fixed="top">
        <NavbarBrand
          onClick={closeNavbar}
          tag={RRNavLink}
          to="/"
          className="navbar justify-content-start"
        >
          <img
            className="rounded-circle"
            src="src/assets/images/earth.jfif"
            width="30"
            height="30"
            alt=""
          />
          Tik
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                onClick={closeNavbar}
                tag={RRNavLink}
                to="/geolocation"
              >
                Geographic Coordinates
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={closeNavbar}
                tag={RRNavLink}
                to="/login"
              >
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={closeNavbar}
                tag={RRNavLink}
                to="/signup"
              >
                Sign Up
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

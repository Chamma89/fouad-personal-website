import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import Logo from "./images/rock-music.png";

function Nav() {
  return (
    <ReactBootstrap.Navbar className="nav sticky-top" expand="lg">
      <ReactBootstrap.Navbar.Brand href="/">
        <div className="nav__logo">
          <img src={Logo} alt="logo" height="30" />
        </div>
      </ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootstrap.Nav>
          <Link to="/" className="nav__nav-link">
            Work
          </Link>
          <Link to="/about" className="nav__nav-link">
            About
          </Link>
          <Link to="/contact" className="nav__nav-link">
            Contact
          </Link>
        </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
  );
}

export default Nav;

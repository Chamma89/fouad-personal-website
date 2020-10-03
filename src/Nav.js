import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import Logo from "./images/rock-music.png";

function Nav() {
  return (
    // <nav className="p-4">
    //   <a href="/" className="logo position-absolute"></a>
    //   <ul className="nav-links m-0">
    //     <Link to="/">
    //       <li className="">Work</li>
    //     </Link>
    //     <Link to="/about">
    //       <li>About</li>
    //     </Link>
    //     <Link to="/contact">
    //       <li>Contact</li>
    //     </Link>
    //   </ul>
    // </nav>

    <ReactBootstrap.Navbar id="nav" expand="lg">
      <ReactBootstrap.Navbar.Brand href="#home">
        <div className="logo">
          <img src={Logo} alt="logo" height="30" />
        </div>
      </ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootstrap.Nav>
          <Link to="/" className="nav-link">
            Work
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
  );
}

export default Nav;

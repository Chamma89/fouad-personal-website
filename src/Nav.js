import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="p-4">
        <a href="/" className="logo position-absolute"></a>
        <ul className="nav-links m-0">
          <Link to="/">
            <li className="">Work</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;

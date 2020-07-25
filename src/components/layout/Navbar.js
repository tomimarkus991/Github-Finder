import React from "react";
import PropTypes from "prop-types";
import { Navbar as Navbar2, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <Navbar2 bg="dark" variant="dark" expand="lg">
      <Navbar2.Brand href="/">
        <i className={icon} /> {title}
      </Navbar2.Brand>
      <Navbar2.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
      <Navbar2.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </Nav>
      </Navbar2.Collapse>
    </Navbar2>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github mr-2",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;

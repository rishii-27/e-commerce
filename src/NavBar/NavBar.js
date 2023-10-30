import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Cart from "../Cart/Cart";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand nav-link  bold-text">
          Art Gallery
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/contactus" className="nav-link">
                Contact Us
              </NavLink>
            </Nav.Link>
          </Nav>
          <Cart />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

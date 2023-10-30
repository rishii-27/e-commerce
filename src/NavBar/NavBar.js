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
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contactus" className="nav-link">
              Contact Us
            </NavLink>
          </Nav>
          <Cart />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

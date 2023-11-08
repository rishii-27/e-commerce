import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Cart from "../Cart/Cart";
import "../NavBar/NavBar.css";
import CartContext from "../Store/cart-context";

const NavBar = () => {
  const authCtx = useContext(CartContext);

  const logoutHandler = () => {
    authCtx.isLoggedOut();
  };

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
            {authCtx.status ? (
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            ) : (
              ""
            )}
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contactus" className="nav-link">
              Contact Us
            </NavLink>
          </Nav>
          <Nav>
            {authCtx.status ? (
              <NavLink
                to="/logout"
                className="nav-link"
                onClick={logoutHandler}
              >
                <button type="button" className="btn btn-dark">
                  Logout
                </button>
              </NavLink>
            ) : (
              <NavLink to="/login" className="nav-link">
                <button type="button" className="btn btn-dark">
                  Login
                </button>
              </NavLink>
            )}
          </Nav>
          {authCtx.status && <Cart />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

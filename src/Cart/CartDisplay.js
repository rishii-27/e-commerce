import React, { useContext, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartContext from "../Store/cart-context";

const CartDisplay = () => {
  const cartCtx = useContext(CartContext);
  const apiUrl = `https://crudcrud.com/api/9d57e4a297d542a897b19136da0feb0b/${cartCtx.email}`;

  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeItem = (id) => {
    // Remove the item from the local state
    const updatedItems = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedItems);

    // Remove the item from the API
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Fetch updated cart items from the API
        return fetch(apiUrl);
      })
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
      });
  };

  useEffect(() => {
    // Fetch cart items from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
      });
  }, [apiUrl, cartCtx.updateCart]);

  const overallTotal = cartItems.reduce((total, item) => {
    const totalAmount = item.productPrice * item.quantity;
    return total + totalAmount;
  }, 0);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cart {cartItems.length}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="fw-bolder">
            <Col>Title</Col>
            <Col>Price</Col>
            <Col>Quantity</Col>
            <Col>Action </Col>
          </Row>
          <hr />
          {cartItems.map((item) => (
            <div key={item._id}>
              <Row>
                <Col>{item.productName}</Col>
                <Col>{item.productPrice}</Col>
                <Col>{item.quantity}</Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={() => {
                      removeItem(item._id);
                    }}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
              <hr />
            </div>
          ))}
          <b>Total Amount: ₹ {overallTotal}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartDisplay;

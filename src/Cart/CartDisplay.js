import React, { useContext, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartContext from "../Store/cart-context";

const CartDisplay = () => {
  const cartCtx = useContext(CartContext);
  const apiUrl = `https://art-gallery-6bbdf-default-rtdb.firebaseio.com/${cartCtx.email}.json`;

  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeItem = (id) => {
    // Remove the item from the local state
    const updatedItems = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedItems);

    // Remove the item from the API
    fetch(`https://art-gallery-6bbdf-default-rtdb.firebaseio.com/${cartCtx.email}/${id}.json`, {
      method: "DELETE",
    })
      .then(() => {
        // Fetch updated cart items from the API
        return fetch(apiUrl);
      })
      .then((response) => response.json())
      .then((data) => {
        setCartItems(Array.isArray(data) ? data : []); // Ensure data is an array
      });
  };

  useEffect(() => {
    // Fetch cart items from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Transform the data into an array of items
        const itemsArray = Object.keys(data).map((key) => {
          const item = data[key];
          return {
            _id: key, // Use the Firebase key as the _id
            productName: item.productName,
            productPrice: item.productPrice,
            quantity: item.quantity,
          };
        });
        setCartItems(itemsArray); // Set the transformed data
      });
  }, [apiUrl, cartCtx.updateCart]);

  console.log(cartItems);

  const overallTotal = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => {
        const totalAmount = item.productPrice * item.quantity;
        return total + totalAmount;
      }, 0)
    : 0;

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
          {Array.isArray(cartItems) &&
            cartItems.map((item) => (
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
          <b>Total Amount: ₹ {overallTotal.toFixed(2)}</b>{" "}
          {/* Fixed to 2 decimal places */}
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

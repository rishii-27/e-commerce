import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartContext from "../Store/cart-context";

const CartDisplay = () => {
  const cartCtx = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeItem = (id) => {
    cartCtx.removeItem(id);
  };

  // Total of array price x quantity

  const overallTotal = cartCtx.items.reduce((total, item) => {
    const totalAmount = item.price * item.quantity;
    return total + totalAmount;
  }, 0);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cart {cartCtx.items.length}
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
          {cartCtx.items.map((item) => (
            <div key={item.id}>
              <Row>
                <Col> {item.title}</Col>
                <Col>{item.price}</Col>
                <Col>{item.quantity}</Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={() => {
                      // Implement your remove item logic here
                      removeItem(item.id);
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

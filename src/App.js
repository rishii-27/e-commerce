import { Container } from "react-bootstrap";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import CartProvider from "./Store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Container>
        <Cart />
        <Products />
      </Container>
    </CartProvider>
  );
}
export default App;

import { Container } from "react-bootstrap";
import Products from "./Products/Products";
import CartProvider from "./Store/CartProvider";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import About from "./About/About";
import RootLayout from "./Root";
import Home from "./Home/Home";
import ContactUs from "./ContactUs/ContactUs";
import ProductDetail from "./Products/ProductDetail";
import Login from "./Login/Login";
import { useContext } from "react";
import CartContext from "./Store/cart-context";

const ProductsOrLogin = () => {
  // You can access the context and make conditional rendering here
  const authCtx = useContext(CartContext);
  return authCtx.status ? <Products /> : <Login />;
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <ProductsOrLogin />,
      },
      { path: "/products/:title/:price", element: <ProductDetail /> },
      { path: "/about", element: <About /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/login", element: <Login /> },
      { path: "/logout", element: <Login /> },
      { path: "*", element: <Navigate to="/login" replace /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </CartProvider>
  );
}
export default App;

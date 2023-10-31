import { Container } from "react-bootstrap";
import Products from "./Products/Products";
import CartProvider from "./Store/CartProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./About/About";
import RootLayout from "./Root";
import Home from "./Home/Home";
import ContactUs from "./ContactUs/ContactUs";
import ProductDetail from "./Products/ProductDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:title", element: <ProductDetail /> }, // Add dynamic route
      { path: "/about", element: <About /> },
      { path: "/contactus", element: <ContactUs /> },
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

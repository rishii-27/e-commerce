import { Container } from "react-bootstrap";
import Products from "./Products/Products";
import CartProvider from "./Store/CartProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import RootLayout from "./Root";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/about", element: <About /> },
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

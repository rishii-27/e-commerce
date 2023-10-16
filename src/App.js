import { Container } from "react-bootstrap";
import Products from "./Products/Products";
import CartProvider from "./Store/CartProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./About/About";
import RootLayout from "./Root";
import Home from "./Home/Home";

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

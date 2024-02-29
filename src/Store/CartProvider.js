import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const userEmail = localStorage.getItem("email");
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(!!initialToken);

  useEffect(() => {
    if (initialToken) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, [initialToken]);

  const addItemToCartHandler = (item) => {
    const apiUrl = `https://art-gallery-6bbdf-default-rtdb.firebaseio.com/${userEmail}.json`;

    // Fetch existing items from the cart
    fetch(apiUrl)
      .then((response) => response.json())
      .then((cartItems) => {
        if (cartItems) {
          // If the item is not in the cart, add it with a quantity of 1
          fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify({
              productId: item.id,
              productName: item.title,
              productPrice: item.price,
              quantity: 1,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(() => {
              // Update the local state after successful addition
              setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
            })
            .catch((error) =>
              console.error("Error adding new item to cart:", error)
            );
        } else {
          // If cart is empty, add the item
          fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify({
              productId: item.id,
              productName: item.title,
              productPrice: item.price,
              quantity: 1,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(() => {
              // Update the local state after successful addition
              setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
            })
            .catch((error) =>
              console.error("Error adding new item to an empty cart:", error)
            );
        }
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  };

  const removeItemFromCartHandler = (id) => {
    const apiUrl = `https://art-gallery-6bbdf-default-rtdb.firebaseio.com/${userEmail}/${id}.json`;

    // Remove the item from the API
    fetch(apiUrl, {
      method: "DELETE",
    })
      .then(() => {
        // Update the local state after successful removal
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error removing item from cart:", error));
  };

  const loginHandle = (idToken, email) => {
    // Remove @ and . from the email using regex
    const apiEmail = email.replace(/[@.]/g, "");

    // Set the token to true (assuming setToken is a function that sets some state)
    setToken(true);

    // Store the idToken and modified email in localStorage
    localStorage.setItem("token", idToken);
    localStorage.setItem("email", apiEmail);
  };

  const logoutHandle = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(false);
  };

  const cartContext = {
    email: userEmail,
    status: token,
    isLoggedIn: loginHandle,
    isLoggedOut: logoutHandle,
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  console.log(items);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

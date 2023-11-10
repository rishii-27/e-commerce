import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const userEmail = localStorage.getItem("email");
  const [items, updatedItems] = useState([]);
  const [token, setToken] = useState(!!initialToken);

  useEffect(() => {
    if (initialToken) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, [initialToken]);


  const addItemToCartHandler = (item) => {
    const apiUrl = `https://crudcrud.com/api/9d57e4a297d542a897b19136da0feb0b/${userEmail}`;

    // Check if the item is already in the cart
    fetch(apiUrl)
      .then((response) => response.json())
      .then((cartItems) => {
        const existingItem = cartItems.find(
          (cartItem) => cartItem.productId === item.id
        );

        if (existingItem) {
          // If the item is already in the cart, update the quantity by adding 1
          const updatedQuantity = existingItem.quantity + 1;

          // Update the item in the API
          fetch(`${apiUrl}/${existingItem._id}`, {
            method: "PUT",
            body: JSON.stringify({
              productId: item.id,
              productName: item.title,
              productPrice: item.price,
              quantity: updatedQuantity,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        } else {
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
          });
        }
      });

    //   // Check if the item with the same ID already exists in the cart
    //   const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

    //   if (itemIndex !== -1) {
    //     // If the item already exists, increase its quantity
    //     const updatedItem = [...items];
    //     updatedItem[itemIndex].quantity++;
    //     updatedItems(updatedItem);
    //   } else {
    //     // If the item is not in the cart, add it with a quantity of 1
    //     updatedItems([...items, { ...item, quantity: 1 }]);
    //   }
  };

  const removeItemFromCartHandler = (id) => {
    // Remove the item from the API
    const apiUrl = `https://crudcrud.com/api/9d57e4a297d542a897b19136da0feb0b/${userEmail}`;

    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });

    updatedItems(items.filter((item) => item.id !== id));
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
  console.log(cartContext.email);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

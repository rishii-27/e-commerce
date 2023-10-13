import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updatedItems] = useState([]);

  const addItemToCartHandler = (item) => {
    // Check if the item with the same ID already exists in the cart
    const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      // If the item already exists, increase its quantity
      const updatedItem = [...items];
      updatedItem[itemIndex].quantity++;
      updatedItems(updatedItem);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      updatedItems([...items, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCartHandler = (id) => {
    updatedItems(items.filter((item) => item.id !== id));
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

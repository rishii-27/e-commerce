import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updatedItems] = useState([]);

  const addItemToCartHandler = (item) => {
    updatedItems([...items, item]);
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

import React, { createContext, useContext, useState } from 'react';

// Create a Context for the Cart
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component to wrap around the app and provide cart data
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, restaurantName) => {
    // Check if item already in cart
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // Update quantity if item already in cart
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      // Add new item to cart
      setCart([...cart, { ...item, quantity: 1, restaurant: restaurantName }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

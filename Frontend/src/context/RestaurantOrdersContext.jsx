import React, { createContext, useContext, useState } from 'react';

const RestaurantOrdersContext = createContext();

export const useOrders = () => useContext(RestaurantOrdersContext);

export const RestaurantOrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => setOrders([...orders, order]);

  const updateOrderStatus = (orderId, status) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  return (
    <RestaurantOrdersContext.Provider value={{ orders, addOrder, updateOrderStatus }}>
      {children}
    </RestaurantOrdersContext.Provider>
  );
};

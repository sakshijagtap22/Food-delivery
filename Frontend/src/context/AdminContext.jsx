// context/AdminContext.js
import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Customer', active: true },
    { id: 2, name: 'Jane Smith', role: 'Restaurant Owner', active: true },
    { id: 3, name: 'Dave Wilson', role: 'Delivery Personnel', active: false },
  ]);

  const [orders, setOrders] = useState([
    { id: 1, status: 'Delivered', restaurant: 'Pizza Place', date: '2024-11-05' },
    { id: 2, status: 'Pending', restaurant: 'Burger House', date: '2024-11-06' },
  ]);

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => user.id === userId ? { ...user, active: !user.active } : user));
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => order.id === orderId ? { ...order, status: newStatus } : order));
  };

  return (
    <AdminContext.Provider value={{ users, orders, toggleUserStatus, updateOrderStatus }}>
      {children}
    </AdminContext.Provider>
  );
};

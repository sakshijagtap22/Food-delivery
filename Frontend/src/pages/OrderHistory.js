import React, { useState, useEffect } from 'react';
import { orders } from '../mock/data';

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Mock fetching order history
    setOrderHistory(orders.filter(order => order.customer === "John Doe"));
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orderHistory.map((order) => (
          <li key={order.id}>
            <h3>Order from {order.restaurant}</h3>
            <p>Status: {order.status}</p>
            <p>Total: ${order.total}</p>
            <ul>
              {order.items.map((item, idx) => (
                <li key={idx}>{item.name} x{item.quantity} - ${item.price}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;

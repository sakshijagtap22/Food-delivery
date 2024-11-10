import React from 'react';
import styled from 'styled-components';
import { useOrders } from '../context/OrdersContext';

const MyOrders = () => {
  const { orders } = useOrders();

  return (
    <OrdersContainer>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <OrderCard key={order.id}>
            <h3>Order #{order.id}</h3>
            <p>Status: {order.status}</p>
            <OrderItems>
              <h4>Items:</h4>
              {order.items && order.items.map((item, index) => (
                <Item key={index}>
                  <span>{item.name} x {item.quantity}</span>
                  <span>
                    ${((item.price || 0) * item.quantity).toFixed(2)} 
                    {item.price ? ` ($${item.price.toFixed(2)} each)` : ""}
                  </span>
                </Item>
              ))}
            </OrderItems>
            <p>Total: ${order.total ? order.total.toFixed(2) : '0.00'}</p>
            <p>Date: {order.date}</p>
          </OrderCard>
        ))
      )}
    </OrdersContainer>
  );
};

export default MyOrders;

const OrdersContainer = styled.div`
  padding: 20px;
`;

const OrderCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
`;

const OrderItems = styled.div`
  margin-top: 10px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

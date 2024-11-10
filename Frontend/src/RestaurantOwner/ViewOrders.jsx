import React from 'react';
import styled from 'styled-components';
import { useOrders } from '../context/RestaurantOrdersContext';

const ViewOrders = () => {
  const { orders, updateOrderStatus } = useOrders();

  return (
    <Container>
      <h2>View Orders</h2>
      <OrderList>
        {orders.map((order) => (
          <OrderCard key={order.id}>
            <h3>Order #{order.id}</h3>
            <p>Status: {order.status}</p>
            <Button onClick={() => updateOrderStatus(order.id, 'Preparing')}>Preparing</Button>
            <Button onClick={() => updateOrderStatus(order.id, 'Ready for Delivery')}>Ready</Button>
          </OrderCard>
        ))}
      </OrderList>
    </Container>
  );
};

export default ViewOrders;

const Container = styled.div`
  padding: 20px;
`;

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const OrderCard = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  margin: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { useDelivery } from '../context/DeliveryContext';

const ViewAvailableDeliveries = () => {
  const { deliveries, acceptDelivery } = useDelivery();

  return (
    <Container>
      <h2>Available Deliveries</h2>
      {deliveries.filter((delivery) => delivery.status === 'Available').length === 0 ? (
        <p>No deliveries available.</p>
      ) : (
        deliveries
          .filter((delivery) => delivery.status === 'Available')
          .map((delivery) => (
            <DeliveryCard key={delivery.id}>
              <h3>Customer: {delivery.customerName}</h3>
              <p>Address: {delivery.address}</p>
              <Button onClick={() => acceptDelivery(delivery.id)}>Accept Delivery</Button>
            </DeliveryCard>
          ))
      )}
    </Container>
  );
};

export default ViewAvailableDeliveries;

const Container = styled.div`
  padding: 20px;
`;

const DeliveryCard = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { useDelivery } from '../context/DeliveryContext';

const TrackDeliveryStatus = () => {
  const { deliveries, updateDeliveryStatus } = useDelivery();

  return (
    <Container>
      <h2>Track Delivery Status</h2>
      {deliveries.filter((delivery) => delivery.status !== 'Available').length === 0 ? (
        <p>No deliveries in progress.</p>
      ) : (
        deliveries
          .filter((delivery) => delivery.status !== 'Available')
          .map((delivery) => (
            <DeliveryCard key={delivery.id}>
              <h3>Customer: {delivery.customerName}</h3>
              <p>Address: {delivery.address}</p>
              <p>Status: {delivery.status}</p>
              <StatusButton onClick={() => updateDeliveryStatus(delivery.id, 'Picked Up')}>Picked Up</StatusButton>
              <StatusButton onClick={() => updateDeliveryStatus(delivery.id, 'En Route')}>En Route</StatusButton>
              <StatusButton onClick={() => updateDeliveryStatus(delivery.id, 'Delivered')}>Delivered</StatusButton>
            </DeliveryCard>
          ))
      )}
    </Container>
  );
};

export default TrackDeliveryStatus;

const Container = styled.div`
  padding: 20px;
`;

const DeliveryCard = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const StatusButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 8px;
  margin: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

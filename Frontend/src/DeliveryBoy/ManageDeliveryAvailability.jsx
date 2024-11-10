import React from 'react';
import styled from 'styled-components';
import { useDelivery } from '../context/DeliveryContext';

const ManageDeliveryAvailability = () => {
  const { availability, toggleAvailability } = useDelivery();

  return (
    <Container>
      <h2>Manage Delivery Availability</h2>
      <p>Current Status: {availability ? 'Available' : 'Unavailable'}</p>
      <Button onClick={toggleAvailability}>
        {availability ? 'Go Unavailable' : 'Go Available'}
      </Button>
    </Container>
  );
};

export default ManageDeliveryAvailability;

const Container = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  background-color: #ff6347;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e5533d;
  }
`;

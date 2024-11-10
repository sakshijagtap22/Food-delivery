import React, { useState } from 'react';
import styled from 'styled-components';
import { useRestaurant } from '../context/RestaurantContext';

const UpdateRestaurantDetails = () => {
  const { details, updateDetails } = useRestaurant();
  const [formDetails, setFormDetails] = useState(details);

  const handleSave = () => {
    updateDetails(formDetails);
    alert('Restaurant details updated!');
  };

  return (
    <Container>
      <h2>Update Restaurant Details</h2>
      <Form>
        <input
          type="text"
          placeholder="Restaurant Name"
          value={formDetails.name}
          onChange={(e) => setFormDetails({ ...formDetails, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Opening Hours"
          value={formDetails.hours}
          onChange={(e) => setFormDetails({ ...formDetails, hours: e.target.value })}
        />
        <input
          type="text"
          placeholder="Delivery Zones"
          value={formDetails.zones}
          onChange={(e) => setFormDetails({ ...formDetails, zones: e.target.value })}
        />
        <Button onClick={handleSave}>Save Details</Button>
      </Form>
    </Container>
  );
};

export default UpdateRestaurantDetails;

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

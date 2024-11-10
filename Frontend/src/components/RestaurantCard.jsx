import React from 'react';
import styled from 'styled-components';

const RestaurantCard = ({ restaurant }) => (
  <Card>
    <h3>{restaurant.name}</h3>
    <p>{restaurant.cuisine}</p>
    <p>Rating: {restaurant.rating}</p>
    <ul>
      {restaurant.menu.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price}
          {/* Add to Cart button can be added here */}
        </li>
      ))}
    </ul>
  </Card>
);


export default RestaurantCard;

const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;


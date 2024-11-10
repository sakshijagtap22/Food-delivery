import React, { useState, useEffect } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import axios from 'axios';
import { restaurants } from '../mock/data';
import styled from 'styled-components';

const Customer = () => {
  const [res, setRestaurants] = useState([]);

  useEffect(() => {
    // axios.get('/api/restaurants')
    //   .then(response => setRestaurants(response.data))
    //   .catch(error => console.error(error));
    setRestaurants(restaurants);
  }, []);

  return (
    <div>
      <h2>Browse Restaurants</h2>
      <Grid className="restaurant-grid">
        {res.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Grid>
    </div>
  );
};

export default Customer;

const Grid = styled.div`
  display: flex;
`

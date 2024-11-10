import React, { createContext, useContext, useState } from 'react';

const RestaurantContext = createContext();

export const useRestaurant = () => useContext(RestaurantContext);

export const RestaurantProvider = ({ children }) => {
  const [details, setDetails] = useState({
    name: '',
    hours: '',
    zones: ''
  });

  const updateDetails = (newDetails) => setDetails(newDetails);

  return (
    <RestaurantContext.Provider value={{ details, updateDetails }}>
      {children}
    </RestaurantContext.Provider>
  );
};

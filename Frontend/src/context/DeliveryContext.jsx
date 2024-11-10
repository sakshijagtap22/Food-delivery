import React, { createContext, useContext, useState } from 'react';

const DeliveryContext = createContext();

export const useDelivery = () => useContext(DeliveryContext);

export const DeliveryProvider = ({ children }) => {
  const [deliveries, setDeliveries] = useState([
    { id: 1, customerName: 'John Doe', address: '123 Main St', status: 'Available' },
    { id: 2, customerName: 'Jane Smith', address: '456 Elm St', status: 'Available' },
  ]);

  const [availability, setAvailability] = useState(true);

  const acceptDelivery = (id) => {
    setDeliveries((prev) =>
      prev.map((delivery) => 
        delivery.id === id ? { ...delivery, status: 'Accepted' } : delivery
      )
    );
  };

  const updateDeliveryStatus = (id, status) => {
    setDeliveries((prev) =>
      prev.map((delivery) =>
        delivery.id === id ? { ...delivery, status } : delivery
      )
    );
  };

  const toggleAvailability = () => setAvailability(!availability);

  return (
    <DeliveryContext.Provider
      value={{ deliveries, acceptDelivery, updateDeliveryStatus, availability, toggleAvailability }}
    >
      {children}
    </DeliveryContext.Provider>
  );
};

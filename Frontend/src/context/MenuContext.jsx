import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  const addItem = (item) => setMenu([...menu, item]);

  const updateItem = (updatedItem) => {
    setMenu(menu.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const removeItem = (id) => setMenu(menu.filter((item) => item.id !== id));

  return (
    <MenuContext.Provider value={{ menu, addItem, updateItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
};

import React, { useState } from 'react';
import styled from 'styled-components';
import { useMenu } from '../context/MenuContext';

const ManageMenus = () => {
  const { menu, addItem, updateItem, removeItem } = useMenu();
  const [newItem, setNewItem] = useState({ name: '', price: 0, description: '' });

  const handleAddItem = () => {
    addItem({ ...newItem, id: Date.now() });
    setNewItem({ name: '', price: 0, description: '' });
  };

  return (
    <Container>
      <h2>Manage Menus</h2>
      <InputContainer>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
        />
        <textarea
          placeholder="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        />
        <Button onClick={handleAddItem}>Add Item</Button>
      </InputContainer>

      <MenuList>
        {menu.map((item) => (
          <MenuItem key={item.id}>
            <h3>{item.name} - ${item.price.toFixed(2)}</h3>
            <p>{item.description}</p>
            <Button onClick={() => updateItem({ ...item, price: item.price + 1 })}>Update Price</Button>
            <DeleteButton onClick={() => removeItem(item.id)}>Delete</DeleteButton>
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
};

export default ManageMenus;

const Container = styled.div`
  padding: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MenuItem = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545;
  &:hover {
    background-color: #c82333;
  }
`;

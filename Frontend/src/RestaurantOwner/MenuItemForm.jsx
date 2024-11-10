import React, { useState, useEffect } from 'react';

const MenuItemForm = ({ item = {}, onSubmit }) => {
  const [name, setName] = useState(item.name || '');
  const [description, setDescription] = useState(item.description || '');
  const [price, setPrice] = useState(item.price || '');
  const [available, setAvailable] = useState(item.available || false);

  useEffect(() => {
    if (item) {
      setName(item.name);
      setDescription(item.description);
      setPrice(item.price);
      setAvailable(item.available);
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: item.id || Date.now(), name, description, price: parseFloat(price), available });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" type="number" />
      <label>
        Available:
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      </label>
      <button type="submit">{item.id ? "Update" : "Add"} Item</button>
    </form>
  );
};

export default MenuItemForm;

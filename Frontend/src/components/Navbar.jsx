import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/CartContext'; 
import { useOrders } from '../context/OrdersContext'; // Import OrdersContext
import { useUser } from '../context/UserContext';

const NavBar = () => {
  const { cart, setCart } = useCart();
  const { addOrder } = useOrders(); // Access addOrder function from OrdersContext
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { role } = useUser(); 

  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cart.map(item =>
      item.id === itemId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cart.map(item =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    const total = getTotalAmount();
  
    const newOrder = {
      id: Date.now(),
      status: 'Ongoing',
      items: cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      total: parseFloat(total),
      date: new Date().toISOString().split('T')[0],
    };
  
    addOrder(newOrder); // Add order to OrdersContext
    setCart([]); // Clear the cart
    setIsCartVisible(false); // Close the cart modal
  
    alert("Your order has been placed!");
  };
  

  return (
    <Nav>
      <Logo>Foodie</Logo>
      <NavLinks>
        
        {role === 'delivery' && <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/track">Track</NavLink>
          <NavLink to="/order">Orders</NavLink>
          <NavLink to="/settings">Manage</NavLink>
        </> }
         { (role === 'owner' || role === 'customer') &&  <>
            <NavLink to="/">Home</NavLink>
        <NavLink to="/browse">{role==='customer' ? 'Restaurants' : 'Menu'}</NavLink>
        <NavLink to="/orders">My Orders</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
        <CartIcon onClick={() => setIsCartVisible(!isCartVisible)}>
          🛒 {cart.length}
        </CartIcon>
          </>  
        }
      </NavLinks>

      {/* Cart Modal */}
      {isCartVisible && (
        <CartModal>
          <h3>Your Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.name} x {item.quantity} - ${item.price.toFixed(2)} each
                    <div>
                      <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                      <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                    </div>
                  </li>
                ))}
              </ul>
              <p>Total: ${getTotalAmount()}</p>
            </>
          )}
          <Button onClick={() => setIsCartVisible(!isCartVisible)}>Close</Button>
          {cart.length > 0 && <PlaceOrderButton onClick={handlePlaceOrder}>Place Order</PlaceOrderButton>}
        </CartModal>
      )}
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ff6347;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #fdd835;
  }
`;

const CartIcon = styled.div`
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
`;

const CartModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  width: 300px;
  height: 100vh;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Button = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #fdd835;
  }
`;

const PlaceOrderButton = styled(Button)`
  background-color: #28a745;
  margin-top: 20px;
  &:hover {
    background-color: #218838;
  }
`;

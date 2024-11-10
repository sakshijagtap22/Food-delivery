import React, { useState } from 'react';

const Order = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const placeOrder = () => {
        // Call the backend to place the order
        // Show a confirmation message
    };

    return (
        <div>
            <h2>Your Order</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                ))}
            </ul>
            <button onClick={placeOrder}>Place Order</button>
        </div>
    );
};

export default Order;

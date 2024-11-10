// src/Customer/RegisterLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';
import "./RegisterLogin.css";

const RegisterLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("customer");
  const [formData, setFormData] = useState({
    name: '',
    restaurantName: '',
    email: '',
    password: '',
    address: '',
    paymentDetails: '',
    contactDetails: '',
    vehicleType: ''
  });
  const { loginUser } = useUser(); // Get loginUser function from context
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Simulate login and use context to set user data
      loginUser(formData, role);
      console.log("Logged in as:", role);
      navigate("/"); // Redirect to home or user-specific page
    } else {
      // Simulate registration and use context to set user data
      loginUser(formData, role);
      alert("Registered successfully");
      navigate("/"); // Redirect to home
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>

      <div>
        <label>Role:</label>
        <select value={role} onChange={handleRoleChange}>
          <option value="customer">Customer</option>
          <option value="restaurantOwner">Restaurant Owner</option>
          <option value="deliveryPersonnel">Delivery Personnel</option>
          <option value="administrator">Administrator</option>
        </select>
      </div>

      <form onSubmit={handleFormSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {!isLogin && (
          <>
            {role === "customer" && (
              <>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <label>Payment Details:</label>
                <input
                  type="text"
                  name="paymentDetails"
                  value={formData.paymentDetails}
                  onChange={handleChange}
                  required
                />
              </>
            )}

            {role === "restaurantOwner" && (
              <>
                <label>Restaurant Name:</label>
                <input
                  type="text"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  required
                />
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <label>Contact Details:</label>
                <input
                  type="text"
                  name="contactDetails"
                  value={formData.contactDetails}
                  onChange={handleChange}
                  required
                />
              </>
            )}

            {role === "deliveryPersonnel" && (
              <>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label>Contact Details:</label>
                <input
                  type="text"
                  name="contactDetails"
                  value={formData.contactDetails}
                  onChange={handleChange}
                  required
                />
                <label>Vehicle Type:</label>
                <input
                  type="text"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  required
                />
              </>
            )}

            {role === "administrator" && (
              <>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </>
            )}
          </>
        )}
        
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create an account' : 'Already have an account? Log in'}
      </button>
    </div>
  );
};

export default RegisterLogin;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../UserContext';

const ProtectedRoute = ({ role, children }) => {
  const { role: userRole } = useUser();

  if (!userRole) return <Navigate to="/login" />;
  if (userRole !== role) return <Navigate to="/" />; // Redirect if role doesn't match

  return children;
};

export default ProtectedRoute;

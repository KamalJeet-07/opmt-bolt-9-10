import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../supabaseClient';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const session = isAuthenticated(); // Replace with your authentication logic

  if (!session) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return <>{children}</>; // Render protected content
};

export default ProtectedRoute;

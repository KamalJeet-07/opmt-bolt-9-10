import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../supabaseClient'; // Supabase auth check

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null); // Track auth status

  useEffect(() => {
    const checkAuth = async () => {
      const session = await isAuthenticated(); // Asynchronously check auth
      setIsAuth(!!session); // Set true if session exists, otherwise false
    };
    checkAuth();
  }, []);

  if (isAuth === null) {
    return <div>Loading...</div>; // Loading state while checking auth
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return <>{children}</>; // Render protected content if authenticated
};

export default ProtectedRoute;

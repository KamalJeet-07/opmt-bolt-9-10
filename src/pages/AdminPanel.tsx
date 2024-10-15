import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../supabaseClient';
import AdminPanelContent from './AdminPanelContent'; // Your current AdminPanel logic

const AdminPanel: React.FC = () => {
  const [loading, setLoading] = useState(true); // Add loading state
  const [authenticated, setAuthenticated] = useState(false); // Track authentication status
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await isAuthenticated();
        if (session) {
          setAuthenticated(true); // Set authentication status
        } else {
          navigate('/login'); // Redirect to login if not authenticated
        }
      } catch (error) {
        console.error('Error checking authentication', error);
        // Optionally handle the error or display a message
      } finally {
        setLoading(false); // End loading regardless of outcome
      }
    };
    checkAuth();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Render loading state
  }

  return authenticated ? <AdminPanelContent /> : null; // Only render if authenticated
};

export default AdminPanel;

// src/components/AdminPanel.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../supabaseClient';
import AdminPanelContent from './AdminPanelContent';

const AdminPanel: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await isAuthenticated();
        if (session) {
          setAuthenticated(true);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error checking authentication', error);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or custom loading component
  }

  return authenticated ? <AdminPanelContent /> : null; 
};

export default AdminPanel;

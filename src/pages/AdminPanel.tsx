import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // or react-router-dom
import { isAuthenticated } from '../supabaseClient';
import AdminPanelContent from './AdminPanelContent'; // Your current AdminPanel logic here

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const session = await isAuthenticated();
      if (!session) {
        navigate('/login'); // Redirect to login if not authenticated
      }
    };
    checkAuth();
  }, [navigate]);

  return <AdminPanelContent />;
};

export default AdminPanel;

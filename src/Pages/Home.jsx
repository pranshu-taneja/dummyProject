import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserID = sessionStorage.getItem('userID');
    const storedPassword = sessionStorage.getItem('password');

    if (!storedUserID || !storedPassword) {
      navigate('/Login');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('userID');
    sessionStorage.removeItem('password');
    
    navigate('/Login');
  };

  return (
    <div>
      <div>HomePage</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;

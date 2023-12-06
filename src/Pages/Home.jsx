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

  return (
    <div>
      <div>HomePage</div>
    </div>
  );
}

export default Home;

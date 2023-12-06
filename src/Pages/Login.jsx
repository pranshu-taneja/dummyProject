import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const exp_UserId = 'rahul';
  const exp_Passwd = '123456';

  const [userInput, setUserInput] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserID = sessionStorage.getItem('userID');
    const storedPassword = sessionStorage.getItem('password');

    if (storedUserID === exp_UserId && storedPassword === exp_Passwd) {
      navigate('/Home');
    }
  }, [navigate]);

  function handleLogin(e) {
    e.preventDefault();
    if (userInput === exp_UserId && password === exp_Passwd) {
      sessionStorage.setItem('userID', userInput);
      sessionStorage.setItem('password', password);
      navigate('/Home');
    }
  }

  return (
    <div>
      <form action="">
        <div className='userNameField'>
          <label htmlFor="userId">User ID</label>
          <input type="text" id='userId' onChange={(e) => setUserInput(e.target.value)} />
        </div>
        <div className='passwdField'>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;

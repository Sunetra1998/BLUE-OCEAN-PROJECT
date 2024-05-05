import React, { useState } from 'react';
import "./Login.scss";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can perform your login logic
    // For demonstration purposes, let's just redirect to the Home page
    navigate('/home');
  };
  return (
    <div className='Login'>
      <div className='Image'></div>
      <div className="login-container">
        <h1>Log in to BluOcean</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className='email'
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <a href="#"><strong>Forgot password?</strong></a>
          <button type="submit">Login</button>
        </form>
        <p><strong>Want to know more about BluOcean? <span className='SignUp'>Sign Up</span></strong></p>
      </div>
    </div>
  );
}

export default Login;

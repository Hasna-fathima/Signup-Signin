import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', {
        username,
        email,
        password,
        confirmPassword

      });

      setIsLoggedIn(true);
      setErrorMessage('');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('')
    } catch (error) {
      setErrorMessage(error.response.data.error);
      setIsLoggedIn(false);
    }
  };

  const validateFields = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm password is required.');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (!username) {
      setUsernameError('Username is required.');
      isValid = false;
    } else {
      setUsernameError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      console.log('form is submitted')
      handleLogin();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
      if (emailError) setEmailError('');
    } else if (name === 'password') {
      setPassword(value);
      if (passwordError) setPasswordError('');
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
      if (confirmPasswordError) setConfirmPasswordError('');
    } else if (name === 'username') {
      setUsername(value);
      if (usernameError) setUsernameError('');
    }
  };

  return (
    <div className='container'>
      {isLoggedIn ? (
        <p>Welcome back, {username}!</p>
      ) : (
        <form onSubmit={handleSubmit} className='form'>
          <h2 className='title'>Login</h2>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
          {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
          />
          {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
          <div className='button-container'>
          <button type="submit" className='button'>Login</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
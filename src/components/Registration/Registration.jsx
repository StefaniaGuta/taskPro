import React, { useState } from 'react';
import styles from './Registration.module.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = { username: '', email: '', password: '' };

    if (!username) {
      newErrors.username = 'Username is required.';
      valid = false;
    } else if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long.';
      valid = false;
    }

    if (!email) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid.';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required.';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  return (
    <div className={styles.registrationContainer}>
      <div className={styles.container}>
        <div className={styles.buttonsContainer}>
          <Link 
            to="/register" 
            className={classNames(styles.button, { [styles.activeButton]: isRegisterPage })}>
            Registration
          </Link>
          <Link 
            to="/login" 
            className={classNames(styles.button, { [styles.activeButton]: isLoginPage })}>
            Log In
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={errors.username ? styles.inputError : ''}
            />
            {errors.username && <span className={styles.errorMessage}>{errors.username}</span>}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? styles.inputError : ''}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? styles.inputError : ''}
            />
            {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
          </div>
          <button type="submit" className={styles.submitBtn}>Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;

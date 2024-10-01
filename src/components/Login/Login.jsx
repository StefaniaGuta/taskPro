import React, { useState } from 'react';
import styles from './Login.module.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logIn } from '../../redux/auth/authOperations';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });


  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ ...form }));
    setForm({ email: '', password: '' });

  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  return (
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <div className={styles.buttonsContainer}>
          <Link 
            to="/register" 
            className={classNames(styles.button, {[styles.activeButton]: isRegisterPage})}>
            Registration
          </Link>
          <Link 
            to="/login" 
            className={classNames(styles.button, {[styles.activeButton]: isLoginPage})}>
            Log In
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="username"
              placeholder="Enter your email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
             
            />
            
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
               
              />
              <span 
                className={styles.passwordToggle}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
            
          </div>
          <button type="submit" className={styles.submitBtn}>Log In Now</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

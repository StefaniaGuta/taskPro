import React, { useState } from 'react';
import styles from './Registration.module.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const resetForm = () => {
    setForm({ name: '', email: '', password: '' });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ ...form }));
    resetForm();
    navigate("/page");
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
        <form onSubmit={handleSubmit} autoComplete='off'>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              
            />
            
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             
            />
           
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             
            />
           
          </div>
          <button type="submit" className={styles.submitBtn}>Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;

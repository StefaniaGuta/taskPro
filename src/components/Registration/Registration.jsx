import React, { useState } from 'react';
import styles from './Registration.module.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const resetForm = () => {
    setForm({ name: '', email: '', password: '' });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const resultAction = await dispatch(register({ ...form }));
  
      if (register.fulfilled.match(resultAction)) {
        resetForm();
        navigate("/page");
      } else {
        console.error("Eroare la înregistrare:", resultAction.error.message);
      }
    } catch (error) {
      console.error("Eroare neașteptată:", error);
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
        <form onSubmit={handleSubmit} autoComplete='off'>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              
            />
            
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
             
            />
           
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
             
            />
           
          </div>
          <button type="submit" className={styles.submitBtn}>Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;

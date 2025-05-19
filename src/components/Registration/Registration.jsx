import React, { useState } from 'react';
import styles from './Registration.module.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const resetForm = () => {
    setForm({ name: '', email: '', password: '' });
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const isLongEnough = password.length >= 8;

    if (!isLongEnough) {
       Notiflix.Notify.failure('Password must be at least 8 characters long.');
    } else if (!hasUpperCase) {
       Notiflix.Notify.failure('The password should contain at least 1 uppercase character.');
    } else if (!hasNumber) {
       Notiflix.Notify.failure('Password must contain at least one number.');
    } else if (!hasSpecialChar) {
       Notiflix.Notify.failure('Password must contain at least one special character (!@#$%^&*).');
    }
    return ''; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordError = validatePassword(form.password);
    if (passwordError) {
      Notiflix.Notify.failure(passwordError);
      return;
    }

    try {
      const response = await dispatch(register({ ...form }));
      if (register.fulfilled.match(response)) {
        resetForm();
        navigate('/page');
      } else {
        console.error("Eroare la răspunsul serverului:", response);
      }
      return response;
    } catch (error) {
      Notiflix.Notify.failure("Unexpected error. Try again.");
      console.error("Unexpected error:", error);
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

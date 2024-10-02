import React, { useState } from 'react';
import styles from './Login.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {selectIsLoggedIn} from '../../redux/auth/authSelectors';
import { logIn } from '../../redux/auth/authOperations';


const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });


  
  
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await dispatch(logIn({ ...form }));
      setForm({ email: '', password: '' });
      
      if(selectIsLoggedIn){
        navigate("/page");
      }
    } catch(error) {
      console.log(error)
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { email, password } = form;

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
              value={email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
             
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
                onChange={(e) => setForm({ ...form, password: e.target.value })}
               
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

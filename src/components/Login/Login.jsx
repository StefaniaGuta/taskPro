import React, { useState } from 'react';
import styles from './Login.module.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = { username: '', password: '' };

    if (!username) {
      newErrors.username = 'Email is required.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(username)) {
      newErrors.username = 'Email is invalid.';
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
      console.log('Password:', password);
    }
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={errors.username ? styles.inputError : ''}
            />
            {errors.username && <span className={styles.errorMessage}>{errors.username}</span>}
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? styles.inputError : ''}
              />
              <span 
                className={styles.passwordToggle}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
            {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
          </div>
          <button type="submit" className={styles.submitBtn}>Log In Now</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

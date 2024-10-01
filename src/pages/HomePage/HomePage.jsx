import React from 'react';
import styles from './HomePage.module.css';
import logo from '../../images/img+logo.png';
import { Link } from 'react-router-dom';

const HomePage = () => {


  return (
    <div className={styles.container}>
      <img src={logo} alt="App Logo" className={styles.logo} />
      <p className={styles.text}>Supercharge your productivity and take control of your tasks
         with Task Pro - Don't wait, start achieving your goals now!
      </p>
      <div className={styles.authButtons}>
            <Link to="/register" 
            className={styles.activeButton}>
              Registration
            </Link>
            <Link to="/login" 
            className={styles.LoginButton}>
              Log In
            </Link>
        </div>
    </div>
  );
};

export default HomePage;
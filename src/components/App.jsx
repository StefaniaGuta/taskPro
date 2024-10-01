import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LogInPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import SideBar from './Sidebar/SideBar';

const App = () => {
  return (
    <Router basename="/taskPro">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path='/sidebar' element={<SideBar />} />
      </Routes>
    </Router>
  );
}

export default App;
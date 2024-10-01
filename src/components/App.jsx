import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LogInPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import SideBar from './SideBar/SideBar';
import ProjectOffice from './ProjectOffice/ProjectOffice';

const App = () => {
  
  return (
    <Router basename="/taskPro">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/projectoffice" element={<ProjectOffice />} />
      </Routes>
    </Router>
  );
};

export default App;

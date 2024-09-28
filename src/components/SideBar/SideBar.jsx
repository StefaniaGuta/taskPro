import { useState, useEffect } from 'react';
import menu from '../../images/menu.png';
import SidebarLogo from '../../images/Sidebar-logo.png';
import NeedHelpImg from '../../images/NeedHelpImg.png';
import Project from '../../images/Project.png';
import puzzle from '../../images/puzzle-piece-02.png';
import logoutImg from '../../images/logoutImg.jpg';
import helpCircle from '../../images/help-circle.png';
import SideBin from '../../images/SideBin.png';
import SidePencil from '../../images/SidePencil.png';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import style from './SideBar.module.css';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setIsDesktop(true);
        if (!isOpen) {
          setIsOpen(true);
        }
      } else {
        setIsDesktop(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const DrawerList = (
    <Box 
    className={style.Sidebar}
    sx={{
      border: 'none', 
      boxShadow: 'none',
      transform: 'none',
    }}>
      <img className={style.SideLogo}
        src={isOpen ? SidebarLogo : menu} 
        alt='menu' 
        onClick={toggleSidebar} 
        
      />
      {isOpen && (
        <>
          <p className={style.Boards}>My boards</p>
          <div className={style.CreateBoardSection}>
            <h2 className={style.CreateBoard}>Create a new board</h2>
            <button className={style.CreateBoardBtn}>+</button>
          </div>

          <div className={style.ProjectSection}>
            <div className={style.NameDiv}>
            <img src={Project} alt='project'/>
            <h2 className={style.PojectName}>Project office</h2>
            </div>

            <div className={style.icons}>
            <img className={style.ProjectIcon} src={SidePencil} alt='icon'/>
            <img className={style.ProjectIcon} src={SideBin} alt='icon'/>
            </div>
          </div>

          <div className={style.NeonProject}>
            <img src={puzzle} alt='puzzle'/>
            <h2>Neon Light Project</h2>
          </div>

          <div className={style.HelpSection}>
            <img src={NeedHelpImg} alt='needhelp'/>
            <p>If you need help with <span>TaskPro</span>, check out our support resources or reach out to our customer support team.</p>
            <button className={style.HelpBtn}>
              <img src={helpCircle} alt='help'/>
              Need help?
            </button>
          </div>
          <button className={style.LogOut}>
            <img src={logoutImg} alt='logout'/>
            Log out
          </button>
        </>
      )}
    </Box>
  );

  return (
    <div>
      <button className={style.OpenCloseBtn}>
      <img
        src={isOpen ? SidebarLogo : menu}
        alt="menu"
        onClick={toggleSidebar}
        className={style.SideLogo}
      />
      </button>
      <Drawer open={isOpen} onClose={toggleSidebar} variant={isDesktop ? 'persistent' : 'temporary'}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SideBar;

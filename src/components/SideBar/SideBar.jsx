import { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/auth/authOperations';
import ModalCreateNewBoard from 'components/PopUp/ModalCreateNewBoard/ModalCreateNewBoard';
import NeedHelp from '../../components/PopUp/NeedHelp/NeedHelp';
import ModalEditBoard from 'components/PopUp/ModalEditBoard/ModalEditBoard';
import menu from '../../images/menu.png';
import SidebarLogo from '../../images/Sidebar-logo.png';
import NeedHelpImg from '../../images/NeedHelpImg.png';
import Project from '../../images/Project.png';
import puzzle from '../../images/puzzle-piece-02.png';
import logout from '../../images/logout.png';
import helpCircle from '../../images/help-circle.png';
import SideBin from '../../images/SideBin.png';
import SidePencil from '../../images/SidePencil.png';
import closeDark from '../../images/closeDark.png';
import openDark from '../../images/openDark.png';
import openViolet from '../../images/openViolet.png';
import { useSelector } from 'react-redux';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


import style from './SideBar.module.css';


const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNeedHelpModalOpen, setIsNeedModalOpen] = useState(false);
  const [isEditBoardModalOpen, setIsEditBoardModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector(state => state.auth.user.theme);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logOut());
      navigate('/');
    } catch (error) {
      console.error("Logout failed: ", error);
    }
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
  }, [isOpen]);

  const CreateBoard = () => {
    setIsModalOpen(true)
    setIsOpen(false)
  }

  const NavigateToNewBoard = () => {
    navigate('/boards')
  }

  const getLogo = () => {
    if (theme === 'dark') {
      return isOpen ? openDark : closeDark;
    }
    if (theme === 'violet') {
      return isOpen ? openViolet : menu;
    }
    return isOpen ? SidebarLogo : menu;
  };
  
  const DrawerList = (
    <Box 
      className={`${style.Sidebar} ${style[theme]}`}
      sx={{
        border: 'none', 
        boxShadow: 'none',
        transform: 'none',
      }}>
      <img className={style.SideLogo}
        src={getLogo()} 
        alt='menu' 
        onClick={toggleSidebar} 
      />
      {isOpen && (
        <>
          <p className={style.Boards}>My boards</p>
          <div className={style.CreateBoardSection}>
            <h2 className={style.CreateBoard}>Create a new board</h2>
            <button type='button' 
              className={style.CreateBoardBtn}
              onClick={CreateBoard}
            >
              +
            </button>
          </div>

          <div className={style.ProjectSection} tabIndex="0" onClick={() => navigate('/office')}>
            <div className={style.NameDiv}>
            <img src={Project} alt='project'/>
            <h2 className={style.PojectName}>Project office</h2>
            </div>

            <div className={style.icons}>
              <img className={style.ProjectIcon}   src={SidePencil} alt='icon' onClick={() => setIsEditBoardModalOpen(true)}/>
              <img className={style.ProjectIcon}  src={SideBin} alt='icon'/>
            </div>
          </div>
          <button onClick={NavigateToNewBoard}>
            New Board
          </button>

          <div className={style.NeonProject}>
            <img src={puzzle} alt='puzzle'/>
            <h2>Neon Light Project</h2>
          </div>

          <div className={style.HelpSection}>
            <img src={NeedHelpImg} alt='needhelp'/>
            <p>If you need help with <span>TaskPro</span>, check out our support resources or reach out to our customer support team.</p>
            <button className={style.HelpBtn} onClick={() => setIsNeedModalOpen(prevState => !prevState)} 
            >
              <img className={style.HelpCircle} src={helpCircle} alt='help'/>
              Need help?
            </button>
          </div>
          <button className={style.LogOut} 
              type='button'
              onClick={handleLogout}>
            <img src={logout} alt='logout'/>
            Log out
          </button>
        </>
      )}
    </Box>
  );

  return (
    <div>
      <button className={`${style.OpenCloseBtn} ${style[theme]}`}>
        <img
          src={getLogo()}
          alt="menu"
          onClick={toggleSidebar}
          className={style.SideLogo}
        />
      </button>

      <Drawer open={isOpen} onClose={toggleSidebar} variant={isDesktop ? 'persistent' : 'temporary'}>
        {DrawerList}
        {isNeedHelpModalOpen && <NeedHelp onClose={() => setIsNeedModalOpen(false)} />}
        {isEditBoardModalOpen && <ModalEditBoard onClose={() => setIsEditBoardModalOpen(false)} />}
      </Drawer>
        <Box className={style.BoardModal}>
          {isModalOpen && <ModalCreateNewBoard onClose={() => setIsModalOpen(false)} />}
        </Box>

    </div>
  );
};

export default SideBar;

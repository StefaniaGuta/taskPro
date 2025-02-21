import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/auth/authOperations';
import ModalCreateNewBoard from 'components/PopUp/ModalCreateNewBoard/ModalCreateNewBoard';
import NeedHelpModal from '../PopUp/NeedHelp/NeedHelp';
import SidebarLogo from '../../images/Sidebar-logo.png';
import NeedHelpImg from '../../images/NeedHelpImg.png';
import openDark from '../../images/openDark.png';
import openViolet from '../../images/openViolet.png';
import { useSelector } from 'react-redux';
import * as React from 'react';
import { closeModal, openModal} from '../../redux/modal/modalSlice';
import AllBoards from '../AllBoards/AllBoards';

import style from './SideBar.module.css';
import url from '../PopUp/icons.svg';


const SideBar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector(state => state.auth.user.theme);
  const modalState = useSelector(state => state.modal);
  const { componentName } = modalState;

  const handleLogout = async () => {
    try {
      await dispatch(logOut());
      navigate('/');
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  const CreateBoard = () => {
    dispatch(openModal("createBoard"));
  };
  const closeSidebar = () => setIsOpen(false);
  const getLogo = () => {
    if (theme === 'dark') {
      return  openDark;
    }
    if (theme === 'violet') {
      return openViolet ;
    }
    return SidebarLogo;
  };

  if (!isOpen) return null;
  
  return (
    <section className={`${style.Sidebar} ${style[theme]}`}>
      <div className={style.SideBardContent}>
        
          <img
            src={getLogo()}
            alt="menu"
            onClick={closeSidebar} 
            className={style.SideLogo}
          />

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

        <AllBoards/>

        <div className={style.HelpSection}>
          <img src={NeedHelpImg} alt='needhelp' />
          <p>If you need help with <span>TaskPro</span>, check out our support resources or reach out to our customer support team.</p>
          
          <button
            className={style.HelpBtn}
            onClick={() => dispatch(openModal("needHelp"))}
          >
            <span className={style.HelpCircle}>?</span>
            Need help?
          </button>
        </div>
        <button
          className={style.LogOut}
          type='button'
          onClick={handleLogout}
        >
          <svg width="32" height="32">
            <use xlinkHref={`${url}#log-out`} />
          </svg>
          Log Out
        </button>
       
      </div>

      
      {componentName === "needHelp" && <NeedHelpModal onClose={() => dispatch(closeModal())} />}
      {componentName === "createBoard" && <ModalCreateNewBoard onClose={() => dispatch(closeModal())} />}
    </section>
  );
};

export default SideBar;
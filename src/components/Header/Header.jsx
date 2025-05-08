import { HeaderSection, Menu, HeaderUserWrap} from "./Header.styled";
import Profile from "components/Profile/Profile";
import ThemeSelect from "components/ThemeSelect/ThemeSelect";
import SideBar from "../SideBar/SideBar";
import { useSelector } from 'react-redux';
import { useState } from "react";
import useWindowWidth from "./useWidth";

import url from '../PopUp/icons.svg';

const Header = () => {
  const theme = useSelector(state => state.auth.user.theme);
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowWidth();

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderSection theme={theme}>
      {width < 1200 ?
        <Menu theme={theme} width="32" height="32" onClick={toggleSide}>
          <use xlinkHref={`${url}#menu-burger`} />
        </Menu>
      :
        <>
          <SideBar/>
          <p></p>
        </>
      }
      {isOpen && <SideBar  isOpen={isOpen} setIsOpen={setIsOpen}/>}
      <HeaderUserWrap >
      <ThemeSelect />
      <Profile/>
      </HeaderUserWrap>
    </HeaderSection>
    );
  };
  
  export default Header;
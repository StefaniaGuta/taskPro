import { HeaderSection, HeaderUserWrap } from "./Header.styled";
import { TempForLanguages } from "components/TempForLanguages/TempForLanguage";
//import Burger from "../Icons/Burger";
import Profile from "components/Profile/Profile";
import ThemeSelect from "components/ThemeSelect/ThemeSelect";
import SideBar from "components/SideBar/SideBar";

const Header = ({ openMenu }) => {
    return (
      <HeaderSection>
        
          <SideBar/>
        <HeaderUserWrap>
          <Profile/>
          <TempForLanguages />
          <ThemeSelect />
        </HeaderUserWrap>
      </HeaderSection>
    );
  };
  
  export default Header;
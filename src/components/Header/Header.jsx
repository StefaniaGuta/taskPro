import { HeaderSection, HeaderUserWrap} from "./Header.styled";
//import { TempForLanguages } from "components/TempForLanguages/TempForLanguage";
import Profile from "components/Profile/Profile";
import ThemeSelect from "components/ThemeSelect/ThemeSelect";
import SideBar from "components/SideBar/SideBar";
import { useSelector } from 'react-redux';

const Header = () => {
  const theme = useSelector(state => state.auth.user.theme);
    return (
      <HeaderSection theme={theme}>
        
          <SideBar/>
          <HeaderUserWrap >
          <ThemeSelect />
          <Profile/>
          </HeaderUserWrap>
       
          
        
      </HeaderSection>
    );
  };
  
  export default Header;
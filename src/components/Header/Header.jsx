import { HeaderSection} from "./Header.styled";
//import { TempForLanguages } from "components/TempForLanguages/TempForLanguage";
import Profile from "components/Profile/Profile";
import ThemeSelect from "components/ThemeSelect/ThemeSelect";
import SideBar from "components/SideBar/SideBar";

const Header = () => {
    return (
      <HeaderSection>
        
          <SideBar/>
       
          <ThemeSelect />
          <Profile/>
          
        
      </HeaderSection>
    );
  };
  
  export default Header;
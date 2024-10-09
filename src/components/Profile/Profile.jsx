import style from './Profile.module.css';
import { useSelector } from 'react-redux';
import {selectUsername} from '../../redux/auth/authSelectors'
import { selectUserAvatar } from '../../redux/auth/authSelectors';
import { useState } from 'react';
import EditProfile from '../PopUp/EditProfile/EditProfile';


const Profile = () => {
  const userName = useSelector(selectUsername);
  const avatar = useSelector(selectUserAvatar)
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
 
  
  function toggleModal() {
    setIsEditUserModalOpen((prevState) => !prevState);
  }
  return (
    <>
    <section className={style.MenuContainer} onClick={toggleModal}>
      <h1 className={style.UserName}>{userName}</h1>
      <img className={style.Avatar} src={avatar} alt='avatar'/>
    </section>
    {isEditUserModalOpen && <EditProfile onClose={toggleModal} />}
    </>
  );
};

export default Profile;
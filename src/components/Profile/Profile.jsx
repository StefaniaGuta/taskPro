import style from './Profile.module.css';
import { useSelector } from 'react-redux';
import {selectUsername} from '../../redux/auth/authSelectors'
import { selectUserAvatar } from '../../redux/auth/authSelectors';

import EditProfile from '../PopUp/EditProfile/EditProfile';
import { closeModal, openModal} from '../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';


const Profile = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUsername);
  const avatar = useSelector(selectUserAvatar)

  const theme = useSelector(state => state.auth.user.theme);
  const modalState = useSelector(state => state.modal);
  const { componentName } = modalState;

  const handleOpenModal = () => {
    dispatch(openModal("editProfile"));
  };

  return (
    <section className={style.ProfileSection}>
      <section className={`${style.MenuContainer} ${style[theme]}`} onClick={handleOpenModal}>
        <h1 className={style.UserName}>{userName}</h1>
        <img className={style.Avatar} src={avatar} alt='avatar'/>
      </section>
      {componentName === "editProfile" && <EditProfile onClose={() => dispatch(closeModal())} />}
    </section>
  );
};

export default Profile;
import style from './Profile.module.css';
import { useSelector } from 'react-redux';
import {selectUsername} from '../../redux/auth/authSelectors'
import { selectUserAvatar } from '../../redux/auth/authSelectors';


const Profile = () => {
  const userName = useSelector(selectUsername);
  const avatar = useSelector(selectUserAvatar)

  return (
    <section className={style.MenuContainer}>
      <h1 className={style.UserName}>{userName}</h1>
      <img className={style.Avatar} src={avatar} alt='avatar'/>
    </section>
  );
};

export default Profile;
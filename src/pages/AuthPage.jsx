import Login from 'components/Login/Login';
import Registration from 'components/Registration/Registration';
import { useParams } from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();

  return <>{id === 'register' ? <Registration /> : <Login />}</>;
};

export default AuthPage;
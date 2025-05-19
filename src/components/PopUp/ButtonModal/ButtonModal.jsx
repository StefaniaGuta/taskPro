import url from '../icons.svg';
import { Button, ContainerIconButton } from './ButtonModal.styled';
import Loader from '../../Loader/Loader';
import { useSelector } from 'react-redux';

const ButtonModal = ({ buttonName, isLoading }) => {
   const theme = useSelector(state => state.auth.user.theme);
  return (
    <>
      <Button theme={theme} type="submit" disabled={isLoading}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ContainerIconButton>
              <svg width="28" height="28">
                <use xlinkHref={theme !== "violet" ?`${url}#buttons-plus` : `${url}#buttons-plus-violet`} />
              </svg>
            </ContainerIconButton>
            {buttonName}
          </>
        )}
      </Button>
    </>
  );
};

export default ButtonModal;

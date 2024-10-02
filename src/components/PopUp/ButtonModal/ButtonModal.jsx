import url from '../../../images/icons/sprite.svg';
import { Button, ContainerIconButton } from './ButtonModal.styled';
import Loader from '../../Loader/Loader';

const ButtonModal = ({ buttonName, isLoading }) => {
  return (
    <>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ContainerIconButton>
              <svg width="14" height="14">
                <use xlinkHref={`${url}#icon-plus`} />
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

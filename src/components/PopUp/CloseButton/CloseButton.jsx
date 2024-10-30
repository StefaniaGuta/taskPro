import url from '../../../images/icons/sprite.svg';
import { closeModal } from '../../../redux/modal/modalSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from './CloseButton.styled';

const CloseButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.auth.user.theme);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <IconButton onClick={handleClose} theme={theme}>
        <svg width="18" height="18">
          <use xlinkHref={`${url}#icon-x-close`} />
        </svg>
        X
      </IconButton>
    </>
  );
};

export default CloseButton;

import { useEffect } from 'react';
import { createPortal } from 'react-dom';


import Close from '../../Icons/Close';
import {
  ModalBackdrop,
  ModalCloseButton,
  ModalContainer,
} from './ModalWrapper.styled';

const CLOSE_KEY_CODE = 'Escape';
const BACKDROP_TRANSITION = {
    initial: { opacity: 0, transition: { type: 'spring' } },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const MODAL_TRANSITION = {
    initial: {
      y: '-100vh',
      transition: { type: 'spring' },
    },
    isOpen: { y: '0' },
    exit: {
      top: '100vh',
      transition: { duration: 5 },
    },
  };
  

const ModalWrapper = ({ children, width, onClose, developers = false }) => {
  useEffect(() => {
    const handleCloseKeyPress = event => {
      if (event.code === CLOSE_KEY_CODE) onClose();
    };

    document.addEventListener('keydown', handleCloseKeyPress);

    return () => document.removeEventListener('keydown', handleCloseKeyPress);
  }, [onClose]);

  return createPortal(
    <ModalBackdrop
      initial={'initial'}
      animate={'isOpen'}
      exit={'exit'}
      variants={BACKDROP_TRANSITION}
      onClick={onClose}
    >
      <ModalContainer
        variants={MODAL_TRANSITION}
        $containerWidth={width}
        $developers={developers}
        onClick={event => event.stopPropagation()}
      >
        <ModalCloseButton
          type="button"
          aria-label="Close modal"
          onClick={onClose}
        >
          <Close
            width="18"
            height="18"
            strokeColor="var(--icon-stroke-color)"
          />
        </ModalCloseButton>
        {children}
      </ModalContainer>
    </ModalBackdrop>,
    document.getElementById('modal-root')
  );
};

export default ModalWrapper;
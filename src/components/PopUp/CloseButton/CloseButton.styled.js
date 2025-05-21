import styled from 'styled-components';

export const IconButton = styled.button`
  position: absolute;
  border: none;
  background-color: inherit;
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white)';
      default:
        return 'var(--black16)';
    }
  }};
  cursor: pointer;
  top: 24px;
  right: 24px;
  padding: 0px;
  margin: 0px;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
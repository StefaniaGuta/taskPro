import styled from 'styled-components';

export const IconButton = styled.button`
  position: absolute;
  border: none;
  stroke: var(--iconCloseColor);
  background-color: inherit;
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#FFFFFF';
      case 'violet':
        return '#161616';
      default:
        return '#161616';
    }
  }};
  cursor: pointer;
  top: 14px;
  right: 14px;
  padding: 0px;
  margin: 0px;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;


// export const BtnClose = styled.button`
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   stroke: var(--iconCloseColor);
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.2);
//   }
// `;
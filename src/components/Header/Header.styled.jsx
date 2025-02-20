import { styled } from 'styled-components';

export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 10px;
   background-color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#161616';
      default:
        return '#FCFCFC';
    }
  }};
`;


export const HeaderUserWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const Menu = styled.svg`
  stroke : ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#FFFFFF';
      default:
        return '#161616';
    }
  }};
`
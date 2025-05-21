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
        return 'var(--black16)';
      default:
        return 'var(--grey-white)';
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
        return 'var(--white)';
      default:
        return 'var(--black16)';
    }
  }};
`
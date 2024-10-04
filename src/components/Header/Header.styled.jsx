import { styled } from 'styled-components';

export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 10px;
  position: relative;
  background-color: ${({ theme }) => {
    switch (theme) {
      case 'light':
        return '#ffffff';
      case 'dark':
        return '#161616';
      case 'violet':
        return '#ffffff';
      default:
        return '#ffffff';
    }
  }
}
`;

export const HeaderUserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  @media screen and (min-width: 768px) {
   gap:14px;
  }
  @media screen and (min-width: 1440px) {
    gap: 25px;
  }
`;
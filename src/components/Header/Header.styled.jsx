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
      case 'dark':
        return '#161616';
      case 'violet':
        return '#FFFFFF';
      default:
        return '#FFFFFF';
    }
  }};
`;


export const HeaderUserWrap = styled.div`
  display: flex;
  gap: 10px;
`;
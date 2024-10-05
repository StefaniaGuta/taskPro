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
        return '#ffffff';
      default:
        return '#ffffff';
    }
  }};  
  color: ${({theme}) =>{
    switch (theme) {
      case 'dark':
        return '#FFFFFF';
      case 'violet':
        return '#161616';
      default:
        return '#161616';
    }
  }}
  
`;


export const HeaderUserWrap = styled.div`
  display: flex;
  gap: 10px;
`;
import styled, { keyframes } from 'styled-components';
import { ErrorMessage, Field } from 'formik';

export const NeedHelpSection = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .3);
  top: 0;
`

export const NeedHelpContainer = styled.div`
  
   position: relative;
    width: 70vw;
    height: 355px;
    background-color: ${({ theme }) => {
      switch (theme) {
        case 'dark':
          return 'var(--black16)';
        default:
          return 'var(--grey-white)';
      }
    }};
    border-radius: var(--border-radius);
    border: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '1px solid var(--green)';
      default:
        return 'none';
    }
  }};
    padding: 24px;
    font-family: var(--font-family);
    box-shadow: 0px 4px 16px 0px #1616160D;
    margin-inline: auto;
    margin-top: 20vh;
  
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    margin-top: 14vh;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-bottom: 24px;
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white)';
      default:
        return 'var(--black16)';
    }
  }};
  text-align: left;
`;

export const InputEmail = styled(Field)`
  width: 83%;
  height: 49px;
  padding: 0 18px;
  background-color: inherit;
  border-radius: 8px;
  border:${({ theme }) => {
    switch (theme) {
      case 'violet':
        return '1px solid var(--violet)';
      default:
        return '1px solid var(--green);';
    }
  }};
  opacity: 0.4000000059604645;
   color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white-grey)';
      default:
        return 'var(--black16)';
    }
  }};
  line-height: 18px;
  font-family: var(--font-family);
  font-size: 14px;
  letter-spacing: -0.28px;
  outline: none;
  

   @media screen and (min-width: 375px) {
    width: 89%;
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: 1px solid var(--green);
  }

  &::placeholder{
   color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white-grey)';
      default:
        return 'var(--black16)';
    }
    }}
  }
  @media screen and (min-width: 768px) {
    width: 362px;
  }
`;

export const InputComment = styled(Field)`
  width: 83%;
  height: 120px;
  padding: 14px 18px;
  background-color: inherit;
  border-radius: var(--border-radius);
  border:${({ theme }) => {
    switch (theme) {
      case 'violet':
        return '1px solid var(--violet)';
      default:
        return '1px solid var(--green);';
    }
  }};
  opacity: 0.4000000059604645;

  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white-grey)';
      default:
        return 'var(--black16)';
    }
    }}
  line-height: 18px;

  font-family: var(--font-family);
  font-size: 14px;
  letter-spacing: -0.28px;

  resize: none;

  margin-top: 14px;

  @media screen and (min-width: 375px) {
    width: 89%;
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: 1px solid var(--green);
  }

  &::placeholder{
   color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white-grey)';
      default:
        return 'var(--black16)';
    }
    }}
  }

  @media screen and (min-width: 768px) {
    width: 362px;
  }
`;


const pulseAnimation = keyframes`
  0% {
    transform: scale(1.03);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.03);
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 49px;
  border-radius: 8px;
  background-color: ${({ theme }) => {
    switch (theme) {
      case 'violet':
        return 'var(--violet)';
      default:
        return 'var(--green)';
    }
  }};

  color: ${({ theme }) => {
    switch (theme) {
      case 'violet':
        return 'var(--white)';
      default:
        return 'var(--black16)';
    }
  }};
  border: 0px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-top: 24px;
  cursor: pointer;

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }


  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0)
    );
    top: 0;
    left: -100%;
    transform: rotate(45deg);
    transition: all 0.3s;
    opacity: 0;
  }

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    animation: ${pulseAnimation} 1s ease-in-out infinite;
  }

  &:hover:before,
  &:focus:before {
    left: 100%;
    opacity: 1;
    transition: left 2s ease-in-out, opacity 0.3s ease-in-out;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;


export const StyleErrorMessage = styled(ErrorMessage)``;

export const Error = styled.p`
  position: absolute;
  width: 100%;
  color: orange;
  font-size: 10px;
  bottom: -11px;
`;

import styled, { keyframes } from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

export const ColumnSection = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
  `

export const ModalContainer = styled.div`
  @media screen and (min-width: 320px) {
    width: 70vw;
  }
  @media screen and (min-width: 375px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }

  height: 221px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  border: 1px solid var(--borderBoardColor);
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
        return '1px solid #BEDBB080';
      default:
        return 'none';
    }
  }};
  position: relative;
  justify-content: center;
  margin-top: 20vh;
`;

export const Title = styled.div`
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white)';
      default:
        return 'var(--black16)';
    }
  }};
  font-size: 18px;
  font-family: var(--font-family);
  font-weight: 500;
  letter-spacing: var(--letter-spacing);
  margin-bottom: 24px;
  text-align: start;
`;

export const Form = styled(FormikForm)``;

export const FormFieldTitle = styled.label`
  width: 100%;
  position: relative;
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  top: 120px;
  color: orange;
  font-size: 10px;
  font-family: var(--font-family);
  font-weight: 500;
`;

export const FieldTitle = styled(FormikField)`
  width: 85%;
  height: 49px;
  padding: 0 18px;
  margin-bottom: 24px;
  align-items: center;
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
  background-color: transparent;
  box-shadow: 0px 4px 16px 0px rgba(0,0,0, .3));

  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white-grey)';
      default:
        return 'var(--black16)';
    }
  }};
  font-size: 14px;
  font-family: var(--font-family);
  letter-spacing: -0.28px;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: none;
  }
  &::placeholder{
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white-grey)';
      default:
        return 'var(--black16)';
    }
  }};
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
  display: flex;
  justify-content: center;
  width: 100%;
  height: 49px;
  padding: 10px 0px 11px 0px;
  align-items: center;
  border-radius: var(--border-radius);
  border: none;
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
        return 'var(--black)';
    }
  }};
  font-size: 14px;
  font-family: var(--font-family);
  font-weight: 500;
  letter-spacing: -0.28px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 350px;
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
import styled, { keyframes } from 'styled-components';
import { Form, ErrorMessage as FormikError, Field } from 'formik';

export const NewBoardSection = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .3);
  top: 0;
`;

export const ModalCard = styled.div`
  position: relative;
  width: 70vw;
  height: 450px;
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
  z-index: 20000;
  margin-inline: auto;
  margin-top: 20vh;


  @media screen and (min-width: 320px) {
    width: 75vw;
  }
  @media screen and (min-width: 375px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const Title = styled.h2`
   color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white)';
      default:
        return 'var(--black16)';
    }
  }};
  font-size: var(--fontSize18);
  font-family: var(--font-family);
  font-weight: (--fontWeight500);
  letter-spacing: var(--letterSpacing36);
  text-align: start;
  margin-bottom: 24px;
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FormFieldTitle = styled.label`
  width: 100%;
  position: relative;
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  top: ${({ name }) =>
    name === 'title' ? '50px' : name === 'iconId' ? '190px' : '60px'};

  color: var(--errorColor);
  font-size: 10px;
  font-family: var(--font-family);
  font-weight: 500;
`;

export const FieldTitle = styled(Field)`
  width: 83%;
  height: 49px;
  padding: 0 18px;
  margin-bottom: 24px;
  align-items: center;
  border-radius: var(--border-radius);
  background: transparent;
  border:${({ theme }) => {
    switch (theme) {
      case 'violet':
        return '1px solid var(--violet)';
      default:
        return '1px solid var(--green);';
    }
  }};
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white-grey)';
      default:
        return 'var(--black16)';
    }
  }};
  opacity: 0.4000000059604645;

  box-shadow: 0px 4px 16px 0px rgba(0,0,0, .3));

  font-size: 14px;
  font-family: var(--font-family);
  letter-spacing: -0.28px;

  @media screen and (min-width: 375px) {
    width: 89%;
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 89.7%;
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

export const Text = styled.h3`
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white)';
      default:
        return 'var(--black16)';
    }
  }};
  font-size: 14px;
  font-family: var(--font-family);
  font-weight: 500;
  letter-spacing: var(--letter-spacing);
  text-align: start;
  margin-bottom: 14px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Icon = styled.svg`
  fill: none;
  transition-duration: 250ms;
  cursor: pointer;
`;

export const FormikField = styled(Field)`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  transition-duration: 250ms;
`;

export const ImageContainer = styled.div`
  @media screen and (max-width: 333px) {
    margin-bottom: 20px;
  }
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 40px;

  label {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;

    border-radius: var(--border-radius);
    border: none;
    cursor: pointer;
    transition-property: outline-color;
    transition-duration: var(--transition);
    outline: 2.5px solid rgba(0, 0, 0, 0);

    &:hover,
    &:focus,
    &:active {
      transform:scale(1.4);
      transition: transform var(--transition);
      z-index: 1111111;
    }
  }
  label:first-of-type {
    background-color: var(--FFF-white);
  }
`;

export const ImgBox = styled.div`
  position: relative;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--border-radius);
`;

export const FormikFieldImage = styled(Field)`
  display: none;
  

  &:checked+${ImgBox} {
    outline-color: var(--FFF-white);
    outline-offset: 0;
    transition-duration: 250ms;
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
  background-color:${({ theme }) => {
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
  font-size: 14px;
  font-family: var(--font-family);
  font-weight: 500;
  letter-spacing: -0.28px;
  cursor: pointer;

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

export const ImgStyled = styled.img`
  object-fit: cover;
  border-radius: var(--border-radius);
  height: 28px;
`;

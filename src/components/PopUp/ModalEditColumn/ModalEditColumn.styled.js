import styled, { keyframes } from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

export const EditColumnSection = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 0;
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
  border-radius: 8px;
  border: 1px solid var(--borderBoardColor);
  background-color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#161616';
      default:
        return '#FCFCFC';
    }
  }};
  border-radius: 8px;
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
        return '#FFFFFF';
      default:
        return '#161616';
    }
  }};
  font-size: var(--fontSize18);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: var(--letterSpacing36);
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
  color: var(--errorColor);
  font-size: 10px;
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
`;

export const FieldTitle = styled(FormikField)`
 width: 85%;
  height: 49px;
  padding: 0 18px;
  margin-bottom: 24px;
  align-items: center;
  border-radius: 8px;
  border:${({ theme }) => {
    switch (theme) {
      case 'violet':
        return '1px solid #5255BC';
      default:
        return '1px solid #BEDBB0;';
    }
  }};
  opacity: 0.4000000059604645;
  background-color: var(--bgInputBoardColor);
  box-shadow: 0px 4px 16px 0px rgba(var(--boxShadowInputBoardColor));

  color:${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#FFFFFF80';
      default:
        return '#161616';
    }
  }};
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont), var(--roboto);
  letter-spacing: -0.28px;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: 1px solid var(--borderNeedHelpColor);
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
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => {
    switch (theme) {
      case 'violet':
        return '#5255BC';
      default:
        return '#BEDBB0';
    }
  }};

  color: ${({ theme }) => {
    switch (theme) {
      case 'violet':
        return '#FFFFFF';
      default:
        return '#161616';
    }
  }};
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
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

export const ContainerIconButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  background-color: var(--iconBoardBgColor);
  border-radius: var(--borderRadius8);
  stroke: var(--iconPlusBoardColor);
`;

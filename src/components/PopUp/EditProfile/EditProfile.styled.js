import styled, { keyframes } from 'styled-components';
import { Form, Field } from 'formik';

export const EditProfileSection= styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`


export const FormUpdateUser = styled(Form)``;

export const FeedbackFormGroup = styled.div`
  width: 100%;
  margin-bottom: 14px;
  position: relative;
`;

export const PasswordWrapper = styled.div``;

export const InputForm = styled(Field)`
  padding: 0 10px;
  width: 250px;
  height: 49px;
  border:${({ theme }) => {
    switch (theme) {
      case 'violet':
        return '1px solid var(--violet)';
      default:
        return '1px solid var(--green);';
    }
  }};
  border-radius: var(--border-radius);
  background-color: var(--modalBgColor);
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white-grey)';
      default:
        return 'var(--black16)';
    }
  }};
  font-family: var(--font-family);
  font-size: 14px;
  letter-spacing: -0.28px;
  opacity: 0.4000000059604645;

  outline: none;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: 1px solid var(--white-grey);
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

  @media screen and (min-width: 375px) {
    width: 287px;
  }

  @media screen and (min-width: 768px) {
    width: 380px;
  }

  &::placeholder {
    font-size: 14px;
  }
`;

export const ToggleShowPassword = styled.span`
  position: absolute;
  top: 16px;
  right: 18px;
  height: 18px;
`;

export const BtnWrapper = styled.div`
  margin-top: 24px;
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

export const BtnUpdate = styled.button`
  width: 100%;
  height: 49px;
  background-color:${({ theme }) => {
    switch (theme) {
      case 'violet':
        return 'var(--violet)';
      default:
        return 'var(--green)';
    }
  }};
  border-radius: var(--border-radius);
  cursor: pointer;
  color: ${({ theme }) => {
    switch (theme) {
      case 'violet':
        return 'var(--white)';
      default:
        return 'var(--black16)';
    }
  }};
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  border: none;
  border-radius: var(--border-radius);
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

export const Edit = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  padding: 20px;
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
  box-shadow: 0px 4px 16px 0px #1616160D;
  z-index: 1200;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 24px;
    
  }
`;

export const EditTitle = styled.h3`
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white)';
      default:
        return 'var(--black16)';
    }
  }};
  text-align: start;
  width: 100%;
  height: 26px;
  font-family: var(--font-family);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin: 0;
`;

export const ProfilePhotoBlock = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const PhotoUser = styled.img`
  width: 68px;
  height: 68px;
  border-radius: var(--border-radius);
  display: block;
  object-fit: cover;
`;

export const PhotoBox = styled.div`
  position: relative;
  margin-bottom: 25px;
`;

export const LabelEditPhoto = styled.label`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => {
    switch (theme) {
      case 'violet':
        return 'var(--bg-violet)';
      default:
        return 'var(--green)';
    }
  }};
  justify-content: center;
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }
  
`;

export const InputEditPhoto = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const BtnSavePhotoUser = styled.button`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => {
    switch (theme) {
      case 'violet':
        return 'var(--bg-violet)';
      default:
        return 'var(--green)';
    }
  }};
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  border: none;
  padding: 0px;
  cursor: pointer;
`;

export const UserIconSvg = styled.svg`
  width: 68px;
  height: 68px;
  border-radius: var(--border-radius));
`;

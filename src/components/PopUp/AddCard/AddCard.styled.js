import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';
import { FaChevronDown } from 'react-icons/fa';

export const CardSection = styled.section`
 position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const CardModal = styled.div`
  @media screen and (min-width: 320px) {
    width: 70vw;
    margin-left: 25px;
    margin-top: 10px;
  }
  @media screen and (min-width: 375px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
    margin-left: 25vw;
  }

  height: 480px;
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
  font-size: 18px;
  font-family: var(--font-family);
  font-weight: var(--font-weight500);
  letter-spacing: var(--letter-spacing);
  margin: 0 0 24px 0;
  text-align: start;
`;

export const InputTitle = styled(Field)`
  width: 85%;
  height: 30px;
  padding: 14px 18px;
  background-color: transparent;
  border-radius: var(--border-radius);
   border:${({ theme }) => {
    switch (theme) {
      case 'violet':
        return '1px solid var(--violet)';
      default:
        return '1px solid var(--green);';
    }
  }};
  color:${({ theme }) => {
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
  opacity: 0.4000000059604645;
  margin-bottom: 10px;

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

export const InputDescription = styled(Field)`
  width: 85%;
  height: 120px;
  padding: 14px 18px;
  background-color: transparent;
  border-radius: var(--border-radius);
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
        return 'var(--dark16)';
    }
  }};
  };
  line-height: 18px;
  font-family: var(--font-family);
  font-size: 14px;
  letter-spacing: -0.28px;
  resize: none;
  margin-top: 14px;
  opacity: 0.4000000059604645;

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

export const StyledPriority = styled.p`
  font-size: 12px;
  font-weight: var(--font-weight500);
  letter-spacing: -0.24px;
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white-grey)';
      default:
        return 'var(--black16)';
    }
  }};
  margin-top: 24px;
  margin-bottom: 4px;
  text-align: left;
`;

export const StyledLabelDeadline = styled.p`
  font-size: 12px;
  font-weight: var(--font-weight500);
  letter-spacing: -0.24px;
  color:${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white-grey)';
      default:
        return 'var(--black16)';
    }
  }};
  margin-top: 14px;
  margin-bottom: 4px;
  text-align: left;
  background: transparent;
`;

export const Button = styled.button`
  width: 100%;
  height: 49px;
  padding: 10px 0px;
  border-radius: var(--border-radius);
  background-color: var(--btnBoardColor);
  border: 0px;
  font-size: 14px;
  font-weight: var(--font-weight500);
  letter-spacing: -0.28px;
  margin-top: 40px;
`;

export const StyleErrorMessage = styled(ErrorMessage)`
  color: orange;
  margin-top: 5px;
  font-size: 10px);
`;

export const Span = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;

  background-color: ${(props) => {
    if (props.value === 'low') {
      return '#8FA1D0';
    } else if (props.value === 'medium') {
      return '#E09CB5';
    } else if (props.value === 'high') {
      return 'var(--green)';
    } else {
      return 'grey';
    }
  }};

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: 2px solid var(--modalBgColor);
    opacity: 0;
  }

  &:not(:last-child) {
    margin-right: 0px;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 8px;

  label {
    font-size: 12px;
    font-family: var(--font-family);
    letter-spacing: var(--letter-spacing);

    cursor: pointer;
  }

  input {
    opacity: 0;
    position: absolute;
  }

  input:checked {
    & + ${Span}::before {
      opacity: 1;
    }
  }
`;

export const CalendarContainer = styled.div`
  text-align: left;

  &:hover,
  &:focus,
  &:active {
    color: var(--green);
  }
`;
export const LabelDiv = styled.div`
  text-align: left;
`;

export const ButtonDate = styled.button`
  font-size: 14px;
  font-family: var(--font-family);
  letter-spacing: var(--letter-spacing);
  font-weight: var(--font-weight500);
  background-color: transparent;
  border: none;
  padding: 0px;
  float: left;
  position: absolute;  
`;

export const ChevronDown = styled(FaChevronDown)`
  margin-top: 1px;
`;
export const BtnName = styled.span`
  display: flex;
  align-items: stretch;
  gap: 6px;
  color: ${({ theme }) => {
    switch (theme) {
      case 'violet':
        return 'var(--violet)';
      default:
        return 'var(--green)';
    }
  }}; 
`;

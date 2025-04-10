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

  height: 522px;
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
`;

export const Title = styled.h2`
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

export const InputTitle = styled(Field)`
  width: 85%;
  height: 49px;
  padding: 14px 18px;
  background-color: var(--bgInputBoardColor);
  border-radius: 8px;
   border:${({ theme }) => {
    switch (theme) {
      case 'violet':
        return '1px solid #5255BC';
      default:
        return '1px solid #BEDBB0;';
    }
  }};
  color:${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#FFFFFF80';
      default:
        return '#161616';
    }
  }};
  line-height: 18px;
  font-family: var(--poppinsFont), var(--roboto);
  font-size: var(--fontSize14);
  letter-spacing: -0.28px;
  opacity: 0.4000000059604645;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: 1px solid var(--borderNeedHelpColor);
  }

  &::placeholder{
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#FFFFFF80';
      default:
        return '#161616';
    }
  }};
  }  
`;

export const InputDescription = styled(Field)`
  width: 85%;
  height: 120px;
  padding: 14px 18px;
  background-color: var(--bgInputBoardColor);
  border-radius: 8px;
   border:${({ theme }) => {
    switch (theme) {
      case 'violet':
        return '1px solid #5255BC';
      default:
        return '1px solid #BEDBB0;';
    }
  }};
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#FFFFFF80';
      default:
        return '#161616';
    }
  }};
  };
  line-height: 18px;
  font-family: var(--poppinsFont), var(--roboto);
  font-size: var(--fontSize14);
  letter-spacing: -0.28px;
  resize: none;
  margin-top: 14px;
  opacity: 0.4000000059604645;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: 1px solid var(--borderNeedHelpColor);
  }
  &::placeholder{
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#FFFFFF80';
      default:
        return '#161616';
    }
  }};
  }  
`;

export const StyledPriority = styled.p`
  font-size: var(--fontSize12);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.24px;
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#FFFFFF80';
      default:
        return '#161616';
    }
  }};
  margin-top: 24px;
  margin-bottom: 4px;
  text-align: left;
`;

export const StyledLabelDeadline = styled.p`
  font-size: var(--fontSize12);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.24px;
  color:${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#FFFFFF80';
      default:
        return '#161616';
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
  border-radius: var(--borderRadius8);
  background-color: var(--btnBoardColor);
  border: 0px;
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
  margin-top: 40px;
`;

export const StyleErrorMessage = styled(ErrorMessage)`
  color: var(--errorColor);
  margin-top: 5px;
  font-size: var(--fontSize10);
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
      return '#BEDBB0';
    } else {
      return '#1616164D';
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
    color: var(--iconBoardBgColor);
    font-size: var(--fontSize12);
    font-family: Poppins;
    letter-spacing: var(--letterSpacing24);

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
    color: #BEDBB0;
  }
`;
export const LabelDiv = styled.div`
  text-align: left;
`;

export const ButtonDate = styled.button`
  color: var(--boardDateColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  letter-spacing: var(--letterSpacing28);
  font-weight: var(--fontWeight500);
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
        return '#5255BC';
      default:
        return '#BEDBB0';
    }
  }}; 
`;

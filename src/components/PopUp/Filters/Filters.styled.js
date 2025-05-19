import styled from 'styled-components';

export const FiltersContainer = styled.div`
  width: 276px;
  height: 220px;
  padding: 24px;
  position: absolute;
  top: 90px;
  right: 25px;
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
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  z-index: 1;

`;

export const Dash = styled.span`
  width: 274px;
   border: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '1px solid #FFFFFF1A';
      default:
        return '1px solid #1616161A';
    }
  }};
  display: flex;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 14px 0;
`;

export const ShowAll = styled.label`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2%;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-offset: Auto;
  text-decoration-thickness: Auto;
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#FFFFFF80';
      default:
        return '#161616';
    }
  }};
  cursor: pointer;
  display: flex;
  align-items: center;


  &:hover,
  &:focus {
    color: var(--titleBoardColor);
  }
`;

export const ModalTitle = styled.h2`
  width: 51px;
  height: 27px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -2%;
   color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#FFFFFF';
      default:
        return '#161616';
    }
  }};
`;

export const Text = styled.h3`
  width: 74px;
  height: 21px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -2%;
  margin: 0;
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#FFFFFF';
      default:
        return '#161616';
    }
  }};
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
    } else if (props.value === 'without') {
      return '#FFFFFF4D';
    } else {
      return 'var(--transparentColor)';
    }
  }};

  margin-right: 8px;
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
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '#FFFFFF80';
      default:
        return '#161616';
    }
  }};
  label {
  width: 120px;
  height: 18px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2%;
    display: flex;
    cursor: pointer;
    transition-property: color;
    transition-duration: var(--transition);

    &:hover,
    &:focus {
      color: var(--titleBoardColor);
    }
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
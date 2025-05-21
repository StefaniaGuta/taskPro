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
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  z-index: 1;

`;

export const Dash = styled.span`
  width: 274px;
   border: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return '1px solid var(--F1A-grey)';
      default:
        return '1px solid var(--black-161A)';
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
  font-family: var(--font-family);
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
        return 'var(--white-grey)';
      default:
        return 'var(--black1680)';
    }
  }};
  cursor: pointer;
  display: flex;
  align-items: center;


  &:hover,
  &:focus {
    color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white)';
      default:
        return 'var(--black)';
    }
  }};
  }
`;

export const ModalTitle = styled.h2`
  width: 51px;
  height: 27px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: var(--letter-spacing);
   color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white)';
      default:
        return 'var(--black16)';
    }
  }};
`;

export const Text = styled.h3`
  width: 74px;
  height: 21px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: var(--letter-spacing);
  margin: 0;
  color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white)';
      default:
        return 'var(--black16)';
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
      return 'var(--green)';
    } else if (props.value === 'without') {
      return 'grey';
    } else {
      return 'transparent';
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
        return 'var(--white-grey)';
      default:
        return 'var(--black1680)';
    }
  }};
  label {
  width: 120px;
  height: 18px;
  font-family: var(--font-family)
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: var(--letter-spacing)
    display: flex;
    cursor: pointer;
    transition-property: color;
    transition-duration: var(--transition);

    &:hover,
    &:focus {
      color: ${({ theme }) => {
    switch (theme) {
      case 'dark':
        return 'var(--white)';
      default:
        return 'var(--black)';
    }
  }};
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
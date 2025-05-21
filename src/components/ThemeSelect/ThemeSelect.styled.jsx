export const getCustomStyles = (theme) => ({
  control: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: '0',
    cursor: 'pointer',
    height: '21px',
    boxShadow: '0',
    justifyContent: 'center',
    alignContent: 'center',
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    color: state.isSelected
    ? theme === 'violet' 
      ? 'var(--violet)' 
      : 'var(--green)' 
    : theme === 'dark' 
      ? 'var(--white-grey)' 
      : 'var(--black)',
    backgroundColor: 'transparent',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: theme === 'dark' ? 'var(--black15)' : 'var(--grey-white)',
    width: '100px',
    height: '120px',
    color: theme === 'dark' ? 'var(--grey-white)' : 'var(--black)',
    border: theme === 'violet' ? '1px solid #ECEDFD': '1px solid var(--green)',
    borderRadius: '8px',
    boxShadow: '0px 4px 16px 0px #1111111A',
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  singleValue: (provided) => ({
    ...provided,
    height: '21px',
    fontFamily: 'var(--font-family)',
    fontWeight: '500',
    fontSize: '14px',
    letterSpacing: '-0.02em',
    lineHeight: 'var(--line-height)',
    padding: '0',
    color: theme === 'dark' ? 'var(--white-grey)' : 'var(--black16CC)',
    margin: '0',
  }),
  dropdownIndicator: () => ({
    color: theme === 'dark' ? 'var(--white-grey)' : 'var(--black16CC)',
    padding: '0',
    height: '20px',
    width: '20px',
  }),
});


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
      ? '#5255BC' 
      : '#BEDBB0' 
    : theme === 'dark' 
      ? '#FFFFFF80' 
      : '#161616',
    backgroundColor: 'transparent',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: theme === 'dark' ? '#151515' : '#FCFCFC',
    width: '100px',
    height: '120px',
    color: theme === 'dark' ? '#FCFCFC' : '#161616',
    border: theme === 'violet' ? '1px solid #ECEDFD': '1px solid #BEDBB0',
    borderRadius: '8px',
    boxShadow: '0px 4px 16px 0px #1111111A',
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  singleValue: (provided) => ({
    ...provided,
    height: '21px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '500',
    fontSize: '14px',
    letterSpacing: '-0.02em',
    lineHeight: '21px',
    padding: '0',
    color: theme === 'dark' ? '#FFFFFF80' : '#161616CC',
    margin: '0',
  }),
  dropdownIndicator: () => ({
    color: theme === 'dark' ? '#FFFFFF80' : '#161616CC',
    padding: '0',
    height: '20px',
    width: '20px',
  }),
});


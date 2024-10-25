export const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
   border: '0',
    cursor: 'pointer',
    height: '21px',
    boxShadow:  '0',
    justifyContent: 'center',
    alignContent: 'center',
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    color: state.isSelected ? '#BEDBB0' : '#161616',
    backgroundColor: 'transparent',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#FCFCFC',
    width: '100px',
    height: '120px',
    color: 'var(--grey-text-color)',
    border: '1px solid #BEDBB0 ',
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
    fontWeight: '500 ',
    fontSize: '14px ',
    letterSpacing: '-0.02em',
    lineHeight: '21px',
    padding: '0',
    color: '#161616CC',
    margin: '0',
  }),
  
  dropdownIndicator: () => ({
    fill: '#161616CC',
    padding: '0',
    height: '20px',
    width: '20px',
  }),
};

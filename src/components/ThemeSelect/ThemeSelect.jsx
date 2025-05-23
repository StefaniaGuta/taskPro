import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { updateTheme } from '../../redux/theme/themeOperation';
import { getCustomStyles } from './ThemeSelect.styled';

function ThemeSelect() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const theme = useSelector((state) => state.auth.user.theme);

  const THEME_OPTIONS = [
    { value: 'light', label: `${('Light')}` },
    { value: 'dark', label: `${('Dark')}` },
    { value: 'violet', label: `${('Violet')}` },
  ];

  const onChangeTheme = async (selectedOption) => {
    setLoading(true);

    try {
      const resultAction = await dispatch(updateTheme(selectedOption.value));

      if (updateTheme.fulfilled.match(resultAction)) {
        
      } else if (updateTheme.rejected.match(resultAction)) {
        console.log(resultAction.payload );
      }
    } catch (error) {
      console.log('An error occurred while updating the theme');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Select
        classNamePrefix="custom-select"
        styles={getCustomStyles(theme)}
        onChange={onChangeTheme}
        options={THEME_OPTIONS}
        defaultValue={THEME_OPTIONS.find(option => option.value === theme)}
        placeholder={`${('Theme')}`}
        isSearchable={false}
        isDisabled={loading}
      />
    </section>
  );
}

export default ThemeSelect;

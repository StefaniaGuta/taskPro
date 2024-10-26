import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { updateTheme } from '../../redux/theme/themeOperation';
import './ThemeSelect.css';
import { getCustomStyles } from './ThemeSelect.styled';

function ThemeSelect() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const theme = useSelector((state) => state.auth.user.theme);

  const THEME_OPTIONS = [
    { value: 'light', label: `${t('Light')}` },
    { value: 'dark', label: `${t('Dark')}` },
    { value: 'violet', label: `${t('Violet')}` },
  ];

  const onChangeTheme = async (selectedOption) => {
    setLoading(true);

    try {
      const resultAction = await dispatch(updateTheme(selectedOption.value));

      if (updateTheme.fulfilled.match(resultAction)) {
        console.log(t('Theme updated successfully'));
      } else if (updateTheme.rejected.match(resultAction)) {
        console.log(resultAction.payload || t('Failed to update theme'));
      }
    } catch (error) {
      console.log(t('An error occurred while updating the theme'));
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
        placeholder={`${t('Theme')}`}
        isSearchable={false}
        isDisabled={loading}
      />
    </section>
  );
}

export default ThemeSelect;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'semantic-ui-react';

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation('translation');
  const changeLanguage = lng => i18n.changeLanguage(lng);

  const getLanguageOptions = () =>
    [
      { name: 'English', key: 'en', flag: 'us' },
      { name: 'Español', key: 'es', flag: 'do' }
    ].map(l => ({
      key: l.key,
      value: l.key,
      text: l.name,
      flag: l.flag
    }));

  return (
    <Dropdown
      button
      className="icon"
      floating
      labeled
      selection
      icon="world"
      text={t('translation:language.change')}
      onChange={(event, data) => {
        console.log(data);
        changeLanguage(data.value);
      }}
      options={getLanguageOptions()}
    />
  );
};

export default ChangeLanguage;

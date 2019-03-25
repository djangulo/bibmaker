import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from 'semantic-ui-react';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Header as="h1" variant="h3">
        {t('notFound.header')}
      </Header>
      <Header.Subheader>{t('notFound.message')}</Header.Subheader>
    </React.Fragment>
  );
}

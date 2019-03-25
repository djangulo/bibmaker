/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import InputAdapter from '../common/inputAdapter';

import { Field } from 'react-final-form';

const WikipediaForm = ({ push }) => {
  const { t } = useTranslation('apa');
  return (
    <React.Fragment>
      <Field
        name="wikipedia.title"
        label={t('apa:form.title')}
        component={InputAdapter}
        placeholder={t('apa:form.title', 'Title')}
      />
      <Field
        name="wikipedia.date"
        label={t('apa:form.publicationDate')}
        type="date"
        component={InputAdapter}
        placeholder={t('apa:form.placeholder.publicationDate', '3/2/2018')}
      />
      <Field
        name="wikipedia.url"
        label={t('apa:recoveredFrom')}
        component={InputAdapter}
        placeholder={t(
          'apa:form.placeholder.recoveredFrom',
          'https://example.com'
        )}
      />
    </React.Fragment>
  );
};

export default WikipediaForm;

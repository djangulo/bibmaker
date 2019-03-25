/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import InputAdapter from '../common/inputAdapter';

import { Field } from 'react-final-form';

const LawForm = ({ push }) => {
  const { t } = useTranslation('apa');
  return (
    <React.Fragment>
      <Field
        name="law.number"
        label={t('apa:form.number')}
        component={InputAdapter}
        placeholder={t('apa:form.placeholder.number', 'e.g. 22-31')}
      />
      <Field
        name="law.denomination"
        label={t('apa:form.denomination')}
        component={InputAdapter}
        placeholder={t('apa:form.denomination', 'Denomination')}
      />
      <Field
        name="law.location"
        label={t('apa:form.location')}
        component={InputAdapter}
        placeholder={t('apa:form.placeholder.location', 'Grand canyon, USA')}
      />
      <Field
        name="law.date"
        label={t('apa:form.publicationDate')}
        component={InputAdapter}
        type="date"
        placeholder={t('apa:form.placeholder.publicationDate', 'mm/dd/yyyy')}
      />
    </React.Fragment>
  );
};

export default LawForm;

/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import InputAdapter from '../common/inputAdapter';

import { Field } from 'react-final-form';

const ReportForm = ({ push }) => {
  const { t } = useTranslation('apa');
  return (
    <React.Fragment>
      <Field
        name="report.entityName"
        label={t('apa:form.encyclopediaName')}
        component={InputAdapter}
        placeholder={t('apa:form.encyclopediaName', 'Encyclopedia name')}
      />
      <Field
        name="report.date"
        label={t('apa:form.publicationDate')}
        component={InputAdapter}
        type="date"
        placeholder={t('apa:form.placeholder.publicationDate', 'mm/dd/yyyy')}
      />
      <Field
        name="report.title"
        label={t('apa:form.title')}
        component={InputAdapter}
        placeholder={t('apa:form.title', 'Title')}
      />
      <Field
        name="report.number"
        label={t('apa:form.number')}
        component={InputAdapter}
        placeholder={t('apa:form.placeholder.number', 'e.g. 6')}
      />
      <Field
        name="report.url"
        label={t('apa:recoveredFrom')}
        component={InputAdapter}
        placeholder={t('apa:form.placeholder.url', 'https://example.com')}
      />
    </React.Fragment>
  );
};

export default ReportForm;

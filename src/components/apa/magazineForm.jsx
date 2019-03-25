/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import InputAdapter from '../common/inputAdapter';

import { Form as SUIForm } from 'semantic-ui-react';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import SemanticButton from '../common/semanticButton';

const MagazineForm = ({ push }) => {
  const { t } = useTranslation('apa');
  return (
    <React.Fragment>
      <div
        className="field"
        css={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <label css={{ display: 'inline' }}>{t('apa:form.authors')}</label>
        <div>
          <SemanticButton
            text={t('apa:form.add')}
            icon="add circle"
            size="tiny"
            type="button"
            onClick={() => push('magazine.authors', undefined)}
          />
        </div>
      </div>
      <FieldArray name="magazine.authors">
        {({ fields }) =>
          fields.map((name, index) => {
            return (
              <SUIForm.Group
                key={name}
                css={{ display: 'flex', alignItems: 'center' }}
              >
                <Field
                  name={`${name}.firstName`}
                  label={t('apa:form.firstName', 'First name')}
                  width={5}
                  component={InputAdapter}
                />
                <Field
                  name={`${name}.lastName`}
                  label={t('apa:form.lastName', 'Last name')}
                  width={5}
                  component={InputAdapter}
                />
                <div>
                  <SemanticButton
                    text={t('apa:form.remove')}
                    icon="minus circle"
                    size="mini"
                    type="button"
                    onClick={() => fields.remove(index)}
                  />
                </div>
              </SUIForm.Group>
            );
          })
        }
      </FieldArray>
      <Field
        name="magazine.date"
        label={t('apa:form.publicationDate')}
        component={InputAdapter}
        type="date"
        placeholder={t('apa:form.placeholder.publicationDate', '2/29/1992')}
      />
      <Field
        name="magazine.title"
        label={t('apa:form.title')}
        component={InputAdapter}
        placeholder={t('apa:form.title', 'Title')}
      />
      <Field
        name="magazine.entityName"
        label={t('apa:form.magazineName')}
        component={InputAdapter}
        placeholder={t('apa:form.magazineName', 'Magazine name')}
      />
      <Field
        name="magazine.volume"
        label={t('apa:form.volume')}
        component={InputAdapter}
        placeholder={t('apa:form.placeholder.volume', 'e.g. 5')}
      />
      <Field
        name="magazine.number"
        label={t('apa:form.number')}
        component={InputAdapter}
        placeholder={t('apa:form.placeholder.number', 'e.g. 22-31')}
      />
      <Field
        name="magazine.pages"
        label={t('apa:form.pages')}
        component={InputAdapter}
        placeholder={t('apa:form.placeholder.pages', 'e.g. 4')}
      />
    </React.Fragment>
  );
};

export default MagazineForm;

/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import InputAdapter from '../common/inputAdapter';

import { Form as SUIForm } from 'semantic-ui-react';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import SemanticButton from '../common/semanticButton';

const AudioRecordingForm = ({ push }) => {
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
            onClick={() => push('audioRecording.authors', undefined)}
          />
        </div>
      </div>
      <FieldArray name="audioRecording.authors">
        {({ fields }) =>
          fields.map((name, index) => {
            return (
              <SUIForm.Group
                key={name}
                css={{ display: 'flex', alignItems: 'center' }}
                widths={'equal'}
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
        name="audioRecording.date"
        label={t('apa:form.publicationDate')}
        component={InputAdapter}
        type="date"
        placeholder={t('apa:form.placeholder.publicationDate', 'mm/dd/yyyy')}
      />
      <Field
        name="audioRecording.title"
        label={t('apa:form.title')}
        component={InputAdapter}
        placeholder={t('apa:form.title', 'Title')}
      />
      <Field
        name="audioRecording.album"
        label={t('apa:form.album')}
        component={InputAdapter}
        placeholder={t('apa:form.album', 'Album')}
      />
      <Field
        name="audioRecording.location"
        label={t('apa:form.location')}
        component={InputAdapter}
        placeholder={t('apa:form.placeholder.location', 'Grand canyon, USA')}
      />
      <Field
        name="audioRecording.producingCompany"
        label={t('apa:form.producingCompany')}
        component={InputAdapter}
        placeholder={t('apa:form.producingCompany', 'Producing company')}
      />
    </React.Fragment>
  );
};

export default AudioRecordingForm;

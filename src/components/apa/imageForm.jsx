/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import InputAdapter from '../common/inputAdapter';
import DropdownAdapter from '../common/dropdownAdapter';

import { Form as SUIForm } from 'semantic-ui-react';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import SemanticButton from '../common/semanticButton';

const ImageForm = ({ push }) => {
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
            onClick={() => push('image.authors', undefined)}
          />
        </div>
      </div>
      <FieldArray name="image.authors">
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
        name="image.date"
        label={t('apa:form.publicationDate')}
        type="date"
        component={InputAdapter}
        placeholder={t('apa:form.placeholder.publicationDate', 'mm/dd/yyyy')}
      />
      <Field
        name="image.title"
        label={t('apa:form.title')}
        component={InputAdapter}
        placeholder={t('apa:form.title', 'Title')}
      />
      <Field
        name="image.type"
        search
        label={t('apa:form.imageType')}
        component={DropdownAdapter}
        placeholder={t('apa:form.placeholder.imageType', 'Image Type')}
        options={['figure', 'chart', 'map', 'image', 'document'].map(type => ({
          key: type,
          value: type,
          text: t(`apa:form.imageTypes.${type}`)
        }))}
      />
      <Field
        name="image.url"
        label={t('apa:recoveredFrom')}
        component={InputAdapter}
        placeholder={t('apa:form.placeholder.url', 'https://example.com')}
      />
    </React.Fragment>
  );
};

export default ImageForm;

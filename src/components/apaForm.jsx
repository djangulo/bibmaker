/** @jsx jsx */
import React from 'react';
import { Form, Field } from 'react-final-form';
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { connect } from 'react-redux';

import { Form as SUIForm, Label } from 'semantic-ui-react';
import arrayMutators from 'final-form-arrays';

import DropdownAdapter from './common/dropdownAdapter';
import FormStateToRedux from './FormStateToRedux';
import SemanticButton from './common/semanticButton';
import {
  addReference,
  getError as referenceError
} from '../store/referencesDuck';
import { getFormState } from '../store/finalFormDuck';
import { useState } from 'react';

// individual forms

import ScienceJournalForm from './apa/scienceJournalForm';
import NewspaperForm from './apa/newspaperForm';
import OnlineMagazineForm from './apa/onlineMagazineForm';
import MagazineForm from './apa/magazineForm';
import WebPageForm from './apa/webPageForm';
import BlogForm from './apa/blogForm';
import WikipediaForm from './apa/wikipediaForm';
import PhotographForm from './apa/photographForm';
import ImageForm from './apa/imageForm';
import BookForm from './apa/bookForm';
import OnlineNewspaperForm from './apa/onlineNewspaperForm';
import OnlineVideoForm from './apa/onlineVideoForm';
import VideoForm from './apa/videoForm';
import OnlineEncyclopediaForm from './apa/onlineEncyclopediaForm';
import ReportForm from './apa/reportForm';
import TelevisionMediaForm from './apa/televisionMediaForm';
import AudioRecordingForm from './apa/audioRecordingForm';
import PodcastForm from './apa/podcastForm';
import LawForm from './apa/lawForm';
import CDROMForm from './apa/cdromForm';

const styles = {
  row: {
    minHeight: '5em',
    checkbox: { minHeight: '3em' },
    buttonBox: { marginTop: '2em' },
    header: { minHeight: '3em', display: 'inline-block' }
  }
};

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

const mediaMapper = [
  { media: 'book', component: BookForm },
  { media: 'image', component: ImageForm },
  { media: 'photograph', component: PhotographForm },
  { media: 'wikipedia', component: WikipediaForm },
  { media: 'webPage', component: WebPageForm },
  { media: 'blog', component: BlogForm },
  { media: 'magazine', component: MagazineForm },
  { media: 'onlineMagazine', component: OnlineMagazineForm },
  { media: 'newspaper', component: NewspaperForm },
  { media: 'onlineNewspaper', component: OnlineNewspaperForm },
  { media: 'scienceJournal', component: ScienceJournalForm },
  { media: 'onlineVideo', component: OnlineVideoForm },
  { media: 'video', component: VideoForm },
  { media: 'onlineEncyclopedia', component: OnlineEncyclopediaForm },
  { media: 'report', component: ReportForm },
  { media: 'televisionMedia', component: TelevisionMediaForm },
  { media: 'audioRecording', component: AudioRecordingForm },
  { media: 'podcast', component: PodcastForm },
  { media: 'cdrom', component: CDROMForm },
  { media: 'law', component: LawForm }
];

const APAForm = ({ state, error, addReference }) => {
  const { t } = useTranslation('apa');

  const initial = {
    media: '',
    book: { authors: [{ firstName: '', lastName: '' }] },
    image: { authors: [{ firstName: '', lastName: '' }] },
    photograph: { authors: [{ firstName: '', lastName: '' }] },
    webPage: { authors: [{ firstName: '', lastName: '' }] },
    blog: { authors: [{ firstName: '', lastName: '' }] },
    magazine: { authors: [{ firstName: '', lastName: '' }] },
    onlineMagazine: { authors: [{ firstName: '', lastName: '' }] },
    newspaper: { authors: [{ firstName: '', lastName: '' }] },
    scienceJournal: { authors: [{ firstName: '', lastName: '' }] },
    onlineVideo: { authors: [{ firstName: '', lastName: '', username: '' }] },
    video: { authors: [{ firstName: '', lastName: '' }] },
    televisionMedia: { authors: [{ firstName: '', lastName: '' }] },
    audioRecording: { authors: [{ firstName: '', lastName: '' }] },
    podcast: { authors: [{ firstName: '', lastName: '' }] },
    cdrom: { authors: [{ firstName: '', lastName: '' }] },
    wikipedia: {},
    onlineNewspaper: { authors: [{ firstName: '', lastName: '' }] },
    onlineEncyclopedia: { authors: [{ firstName: '', lastName: '' }] },
    report: {},
    law: {}
  };

  const [stateSnapshot, setStateSnapshot] = useState({});
  React.useEffect(() => {
    const { values } = getFormState(state, 'apa');
    if (_.isEmpty(values)) setStateSnapshot(initial);
    else setStateSnapshot(values);
  }, []);

  const mediaOptions = [
    { value: '', text: '' },
    { value: 'book', text: t('apa:book', 'Book'), icon: 'book' },
    { value: 'image', text: t('apa:image', 'Image'), icon: 'image' },
    {
      value: 'photograph',
      text: t('apa:photograph', 'Photograph'),
      icon: 'photo'
    },
    {
      value: 'wikipedia',
      text: t('apa:wikipedia', 'Wikipedia'),
      icon: 'wikipedia w'
    },
    { value: 'webPage', text: t('apa:webPage', 'Web page'), icon: 'world' },
    { value: 'blog', text: t('apa:blog', 'Blog'), icon: 'blogger b' },
    { value: 'magazine', text: t('apa:magazine', 'Magazine'), icon: 'tag' },
    {
      value: 'onlineMagazine',
      text: t('apa:onlineMagazine', 'Online Magazine'),
      icon: 'at'
    },
    {
      value: 'newspaper',
      text: t('apa:newspaper', 'Newspaper'),
      icon: 'newspaper'
    },
    {
      value: 'onlineNewspaper',
      text: t('apa:onlineNewspaper', 'Online Newspaper'),
      icon: 'newspaper outline'
    },
    {
      value: 'scienceJournal',
      text: t('apa:scienceJournal', 'Scientific Journal'),
      icon: 'lab'
    },
    {
      value: 'onlineVideo',
      text: t('apa:onlineVideo', 'Online Video'),
      icon: 'youtube'
    },
    { value: 'video', text: t('apa:video', 'Video'), icon: 'film' },
    {
      value: 'onlineEncyclopedia',
      text: t('apa:onlineEncyclopedia', 'Online Encyclopedia'),
      icon: 'remove bookmark'
    },
    { value: 'report', text: t('apa:report', 'Report'), icon: 'table' },
    {
      value: 'televisionMedia',
      text: t('apa:televisionMedia', 'Television Media'),
      icon: 'tv'
    },
    {
      value: 'audioRecording',
      text: t('apa:audioRecording', 'Audio Recording'),
      icon: 'file audio'
    },
    { value: 'podcast', text: t('apa:podcast', 'Podcast'), icon: 'podcast' },
    { value: 'cdrom', text: t('apa:cdrom', 'CD-ROM'), icon: 'dot circle' },
    { value: 'law', text: t('apa:law', 'Law'), icon: 'law' }
  ];

  const onSubmit = (values, form) => {
    const mutable = { ...values };
    const { media } = mutable;
    if (mutable[media].date)
      mutable[media].date = new Date(mutable[media].date);
    addReference({ media, values: mutable[media] }, 'apa');
    if (!error) form.reset({ ...stateSnapshot, [media]: initial[media] });
  };

  // const handleAddReference = () => {};

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={stateSnapshot}
      mutators={{ ...arrayMutators }}
      subscription={{ submitting: true, pristine: true }}
      render={({
        handleSubmit,
        reset,
        submitting,
        pristine,
        values,
        form: {
          mutators: { push, pop }
        }
      }) => (
        <SUIForm unstackable onSubmit={handleSubmit}>
          <FormStateToRedux form="apa" />
          <Field
            name="media"
            label={t('apa:form.media', 'Media')}
            component={DropdownAdapter}
            placeholder={t('apa:form.media', 'Media')}
            options={mediaOptions.map((o, i) => ({ ...o, key: i }))}
            compact={true}
          />
          {mediaMapper.map(({ media, component: C }) => (
            <Condition key={media} when="media" is={media}>
              <C push={push} />
            </Condition>
          ))}
          {error ? (
            <Label basic color="red">
              {t(`references:error.${error}`)}
            </Label>
          ) : null}
          <div css={styles.row.buttonBox}>
            <SemanticButton
              text={t('apa:form.save')}
              icon="save"
              labelPosition="left"
              size="small"
              type="submit"
              disabled={submitting || pristine}
            />
            <SemanticButton
              icon="trash"
              onClick={reset}
              labelPosition="left"
              text={t('apa:form.reset')}
              size="small"
              type="button"
            />
          </div>
        </SUIForm>
      )}
    />
  );
};

export default connect(
  state => ({
    error: referenceError(state),
    state
  }),
  { addReference }
)(APAForm);

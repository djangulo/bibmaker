/** @jsx jsx */
// eslint-disable-next-line
import React from 'react';
import { jsx } from '@emotion/core';
import { Dimmer, Loader } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

export default function LoaderWithText({
  message,
  active = false,
  inverted = false
}) {
  const { t } = useTranslation('translation');
  return (
    <Dimmer active={active} inverted={inverted}>
      <Loader inverted={inverted}>
        {message ? t('translation:loading') : 'Loading...'}
      </Loader>
    </Dimmer>
  );
}

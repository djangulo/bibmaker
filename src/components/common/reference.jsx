import React, { useState } from 'react';
import { connect } from 'react-redux';
import SemanticButton from './semanticButton';
import { Popup, List } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { removeReference } from '../../store/referencesDuck';

import APAFormatter from '../apa/apaFormatter';

const Reference = ({ format, reference, index, onCopy, removeReference }) => {
  const { t } = useTranslation('references');
  const [popupOpen, setPopupOpen] = useState(false);
  let timeoutCounter;

  function handleOpen() {
    setPopupOpen(true);
    timeoutCounter = setTimeout(() => {
      setPopupOpen(false);
    }, 1000);
  }
  function handleClose() {
    setPopupOpen(false);
    clearTimeout(timeoutCounter);
  }
  return (
    <List.Item>
      <List.Content floated="right">
        <Popup
          open={popupOpen}
          on="click"
          trigger={
            <SemanticButton
              text={t('references:copy', 'Copy')}
              icon="copy"
              value={`${format}-${index}`}
              onClick={onCopy}
              size="tiny"
            />
          }
          content={t('references:copied', 'Copied!')}
          onClose={handleClose}
          onOpen={handleOpen}
          position="left center"
        />
        <SemanticButton
          text={t('references:remove', 'Remove')}
          icon="close"
          onClick={() => removeReference(index, format)}
          size="tiny"
        />
      </List.Content>
      <List.Content id={`${format}-${index}`}>
        <APAFormatter {...reference} />
      </List.Content>
    </List.Item>
  );
};
export default connect(
  null,
  { removeReference }
)(Reference);

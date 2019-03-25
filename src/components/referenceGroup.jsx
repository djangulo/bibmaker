import React from 'react';

import { List, Popup } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import SemanticButton from './common/semanticButton';
import Reference from './common/reference';

const ReferenceGroup = ({
  format,
  references,
  onCopyAll,
  onRemoveAll,
  onCopyOne,
  onRemoveOne
}) => {
  const { t } = useTranslation('references');
  const [popupOpen, setPopupOpen] = React.useState(false);
  let timeoutCounter;

  function handleOpen() {
    setPopupOpen(true);
    timeoutCounter = setTimeout(() => {
      setPopupOpen(false);
    }, 1300);
  }
  function handleClose() {
    setPopupOpen(false);
    clearTimeout(timeoutCounter);
  }

  return references && references.length ? (
    <List verticalAlign="middle" id={`${format}-all`}>
      <List.Item>
        <List.Content floated="right">
          <Popup
            open={popupOpen}
            on="click"
            trigger={
              <SemanticButton
                text={t('references:copyAll', {
                  subject: format.toUpperCase(),
                  defaultValue: `Copy ${format.toUpperCase()}`
                })}
                icon="copy"
                value={`${format}-all`}
                onClick={onCopyAll}
                size="tiny"
              />
            }
            content={t('references:copiedAll', {
              subject: format.toUpperCase(),
              number: references.length,
              defaultValue: `${
                references.length
              } ${format.toUpperCase()} references copied!`
            })}
            onClose={handleClose}
            onOpen={handleOpen}
            position="left center"
          />
          <SemanticButton
            text={t('references:removeAll', {
              subject: format.toUpperCase(),
              defaultValue: `Remove ${format.toUpperCase()}`
            })}
            icon="close"
            onClick={onRemoveAll}
            size="tiny"
          />
        </List.Content>
        <List.Header>{t(`references:${format}Title`)}</List.Header>
      </List.Item>
      {references.map((reference, index) => (
        <Reference
          key={`${reference}-${index}`}
          format={format}
          reference={reference}
          index={index}
          onCopy={onCopyOne}
        />
      ))}
    </List>
  ) : null;
};

export default ReferenceGroup;

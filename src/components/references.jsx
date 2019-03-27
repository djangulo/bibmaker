// eslint-disable-next-line
import React from 'react';

import { connect } from 'react-redux';
import {
  getReferences,
  updateReference,
  removeReference,
  removeReferenceGroup
} from '../store/referencesDuck';

import ReferenceGroup from './referenceGroup';

const References = ({ state, removeReference, updateReference }) => {
  const ref = React.useRef(null);

  function copyOneToClipboard(e) {
    const id = e.target.value;
    console.log('id: ', id);
    console.log('event: ', e);
    // const inner = document.querySelector(`#${id}`).innerHTML;
    const range = document.createRange();
    range.selectNodeContents(ref.current.querySelector('#' + id));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }

  function copyGroupToClipboard(e, format) {
    let range;
    const selection = window.getSelection();
    selection.removeAllRanges();
    if (!state[format]) return;
    for (let i = 0; i < state[format].length; i++) {
      range = document.createRange();
      range.selectNodeContents(ref.current.querySelector(`#${format}-${i}`));
      selection.addRange(range);
    }
    document.execCommand('copy');
    selection.removeAllRanges();
  }

  return (
    <div ref={ref}>
      <ReferenceGroup
        format="apa"
        references={state.apa}
        onCopyAll={e => copyGroupToClipboard(e, 'apa')}
        onRemoveAll={() => removeReferenceGroup('apa')}
        onCopyOne={copyOneToClipboard}
      />
    </div>
  );

  // return (
  //   <div ref={ref}>
  //     {state && state.apa.length ? (
  //       <List divided verticalAlign="middle" id="apa-all">
  //         <List.Item>
  //           <List.Content floated="right">
  //             <SemanticButton
  //               text={t('references:copyAll', {
  //                 subject: 'APA',
  //                 defaultValue: 'Copy APA'
  //               })}
  //               icon="copy"
  //               value="apa-all"
  //               onClick={() => console.log('copied all')}
  //               size="tiny"
  //             />
  //           </List.Content>
  //           <List.Header>{t('references:apaTitle')}</List.Header>
  //         </List.Item>
  //         {state.apa.map((reference, index) => (
  //           <Reference
  //             format="apa"
  //             reference={reference}
  //             index={index}
  //             onCopy={copyOneToClipboard}
  //             onRemove={() => removeReference(index, 'apa')}
  //           />
  //         ))}
  //       </List>
  //     ) : null}
  //     <div id="pastebin" style={{ visibility: 'hidden' }} ref={copyRef} />
  //   </div>
  // );
};

export default connect(
  state => ({
    state: getReferences(state)
  }),
  { removeReference, updateReference, removeReferenceGroup }
)(References);

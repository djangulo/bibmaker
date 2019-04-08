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

const References = ({
  state,
  removeReference,
  updateReference,
  removeReferenceGroup
}) => {
  const ref = React.useRef(null);

  function copyOneToClipboard(e) {
    const id = e.target.value;
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#' + id));
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
      range.selectNodeContents(document.querySelector(`#${format}-${i}`));
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
};

export default connect(
  state => ({
    state: getReferences(state)
  }),
  { removeReference, updateReference, removeReferenceGroup }
)(References);

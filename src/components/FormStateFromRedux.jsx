import React from 'react';
import { connect } from 'react-redux';
import { getFormState } from '../store/finalFormDuck';

const FormStateFromRedux = ({ state }) => (
  <pre>{JSON.stringify(state.values, 0, 2)}</pre>
);

export default connect((state, ownProps) => ({
  state: getFormState(state, ownProps.form)
}))(FormStateFromRedux);

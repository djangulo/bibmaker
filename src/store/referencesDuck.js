import _ from 'lodash';

// Actions
const ADD_REFERENCE = 'ADD_REFERENCE';
const REMOVE_REFERENCE = 'REMOVE_REFERENCE';
const UPDATE_REFERENCE = 'UPDATE_REFERENCE';
const REMOVE_REFERENCE_GROUP = 'REMOVE_REFERENCE_GROUP';

const initialState = {
  apa: [],
  error: undefined
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_REFERENCE:
      if (_.isEqual(state[action.format], action.payload)) {
        return { ...state, error: 'alreadyExists' };
      }
      return {
        ...state,
        error: undefined,
        [action.format]: [...state[action.format], action.payload]
      };
    case REMOVE_REFERENCE:
      return {
        ...state,
        error: undefined,
        [action.format]: [...state[action.format]].filter(
          (r, i) => i !== action.payload
        )
      };
    case UPDATE_REFERENCE:
      const references = [...state[action.format]];
      references[action.index] = action.payload;
      return {
        ...state,
        error: undefined,
        [action.format]: references
      };
    case REMOVE_REFERENCE_GROUP:
      return {
        ...state,
        error: undefined,
        [action.format]: action.payload
      };
    default:
      return state;
  }
}

// Action Creators
export function addReference(reference, format) {
  return {
    type: ADD_REFERENCE,
    format,
    payload: reference
  };
}
export function removeReference(referenceIndex, format) {
  return { type: REMOVE_REFERENCE, format, payload: referenceIndex };
}
export function updateReference(reference, format, index) {
  return {
    type: UPDATE_REFERENCE,
    format,
    index,
    payload: reference
  };
}
export function removeReferenceGroup(format) {
  return { type: REMOVE_REFERENCE_GROUP, format, payload: [] };
}

// Selectors
export const getReferences = state => (state && state.references) || {};
export const getError = state =>
  (state && state.references && state.references.error) || undefined;

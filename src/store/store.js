import { createStore, combineReducers } from 'redux';
import finalFormReducer from './finalFormDuck';
import referencesReducer from './referencesDuck';

const reducer = combineReducers({
  finalForm: finalFormReducer,
  references: referencesReducer
});
// const store = createStore(reducer);
const store = createStore(
  reducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

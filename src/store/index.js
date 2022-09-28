import { createStore, combineReducers } from 'redux';
import { user } from './user/reducer';
import { forms } from './forms/reducer';

const store = createStore(
  combineReducers({
    user,
    forms,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export default store;

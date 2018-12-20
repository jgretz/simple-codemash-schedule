/* eslint-disable sort-imports */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import schedule from './features/schedule/reducers';
import shared from './features/shared/reducers';

const rootReducer = combineReducers({
  features: combineReducers({
    schedule: schedule,
    shared: shared,
  }),
  router: routerReducer,
});

export default rootReducer;

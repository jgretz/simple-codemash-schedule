/* eslint-disable sort-imports */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import schedule from './features/schedule/reducers';

const rootReducer = combineReducers({
  features: combineReducers({
    schedule: schedule,
  }),
  router: routerReducer,
});

export default rootReducer;

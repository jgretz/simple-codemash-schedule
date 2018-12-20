/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import categories from './categories.js';
import day from './day.js';
import favorites from './favorites.js';
import loading from './loading.js';
import rooms from './rooms.js';
import sessions from './sessions.js';
import speakers from './speakers.js';

export default combineReducers({
  categories,
  day,
  favorites,
  loading,
  rooms,
  sessions,
  speakers,
});

import {stateReducer} from 'truefit-react-utils';
import {LOADED_CODEMASH_DATA} from '../actions';

const SESSIONS = 'SESSIONS';

const INITIAL = localStorage.getItem(SESSIONS);

export default stateReducer(INITIAL, {
  [LOADED_CODEMASH_DATA]: (_, {payload: {sessions}}) => {
    localStorage.setItem(SESSIONS, sessions);

    return sessions;
  },
});

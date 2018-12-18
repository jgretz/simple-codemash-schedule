import {stateReducer} from 'truefit-react-utils';
import {LOADED_CODEMASH_DATA} from '../actions';

const ROOMS = 'ROOMS';

const INITIAL = localStorage.getItem(ROOMS);

export default stateReducer(INITIAL, {
  [LOADED_CODEMASH_DATA]: (_, {payload: {rooms}}) => {
    localStorage.setItem(ROOMS, rooms);

    return rooms;
  },
});

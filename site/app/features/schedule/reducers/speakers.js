import {stateReducer} from 'truefit-react-utils';
import {LOADED_CODEMASH_DATA} from '../actions';

const SPEAKERS = 'SPEAKERS';

const INITIAL = localStorage.getItem(SPEAKERS);

export default stateReducer(INITIAL, {
  [LOADED_CODEMASH_DATA]: (_, {payload: {speakers}}) => {
    localStorage.setItem(SPEAKERS, speakers);

    return speakers;
  },
});

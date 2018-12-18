import {stateReducer} from 'truefit-react-utils';
import {LOADED_CODEMASH_DATA} from '../actions';

const CATEGORIES = 'CATEGORIES';

const INITIAL = localStorage.getItem(CATEGORIES);

export default stateReducer(INITIAL, {
  [LOADED_CODEMASH_DATA]: (_, {payload: {categories}}) => {
    localStorage.setItem(CATEGORIES, categories);

    return categories;
  },
});

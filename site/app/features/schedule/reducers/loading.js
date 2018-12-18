import {stateReducer} from 'truefit-react-utils';
import {
  LOADING_CODEMASH_DATA,
  LOADED_CODEMASH_DATA,
  FAILED_CODEMASH_DATA,
} from '../actions';

const INITIAL = {
  loadingCodeMashData: false,
};

export default stateReducer(INITIAL, {
  [LOADING_CODEMASH_DATA]: () => ({loadingCodeMashData: true}),
  [LOADED_CODEMASH_DATA]: () => ({loadingCodeMashData: false}),
  [FAILED_CODEMASH_DATA]: () => ({loadingCodeMashData: false}),
});

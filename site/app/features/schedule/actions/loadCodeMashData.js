import {get} from 'truefit-react-utils';

export const LOADING_CODEMASH_DATA = 'LOADING_CODEMASH_DATA';
export const LOADED_CODEMASH_DATA = 'LOADED_CODEMASH_DATA';
export const FAILED_CODEMASH_DATA = 'FAILED_CODEMASH_DATA';

const loadData = async dispatch => {
  dispatch({type: LOADING_CODEMASH_DATA});

  try {
    const response = await get(
      'https://sessionize.com/api/v2/mqm7pgek/view/all',
    );

    dispatch({
      type: LOADED_CODEMASH_DATA,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: FAILED_CODEMASH_DATA,
      payload: err,
    });
  }
};

export const loadCodeMashData = () => dispatch => loadData(dispatch);

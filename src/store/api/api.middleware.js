import axios from 'axios';
import {createAction} from 'utils/redux';
import apiTypes from './api.types';

const apiRequest = ({dispatch}) => next => async action => {
  const result = next(action);
  if (action.type === apiTypes.request) {
    const {url, method, body} = action.payload;
    const {onSuccess, onError, contextInfo} = action.meta;

    const axiosOptions = {
      method,
      url,
      data: body || undefined,
      headers: {},
      timeout: 30000,
    };

    try {
      const {data} = await axios(axiosOptions);
      dispatch(createAction(onSuccess, data, contextInfo));
    } catch (error) {
      dispatch(createAction(onError, error, contextInfo));
    }
  }
  return result;
};

export default [apiRequest];

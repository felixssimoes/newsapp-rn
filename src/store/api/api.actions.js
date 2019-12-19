import { createAction } from 'utils/redux';
import apiTypes from './api.types';

export const apiRequest = (
  method,
  url,
  body,
  onSuccess,
  onError,
  contextInfo,
) =>
  createAction(
    apiTypes.request,
    { url, method, body },
    { onSuccess, onError, contextInfo },
  );

import {createAction} from 'utils/redux';
import appTypes from './app.types';

export const appStart = () => createAction(appTypes.start);

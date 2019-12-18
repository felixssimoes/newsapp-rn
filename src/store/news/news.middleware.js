import appTypes from '../app/app.types';
import {getNewsHeadlinesForAllCategories} from 'data/api/news.api';

const loadNewsOnAppStart = () => next => action => {
  const result = next(action);
  if (action.type === appTypes.start) {
    console.log('Will load news');
    getNewsHeadlinesForAllCategories();
  }
  return result;
};

export default [loadNewsOnAppStart];

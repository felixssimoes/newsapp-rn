import {
  getNewsHeadlinesForAllCategories,
  newsCategories,
} from 'data/api/news.api';
import {getNewsHeadlinesUrl} from 'data/api/url_builder';
import {createAction} from 'utils/redux';
import {apiRequest, loadCategory, loadAllCategories} from 'store/actions';

import appTypes from '../app/app.types';
import newsTypes from './news.types';
import {setCategoryLoading, updateNewsArticles} from './news.actions';

const loadNewsOnAppStart = ({dispatch}) => next => action => {
  const result = next(action);
  if (action.type === appTypes.start) {
    dispatch(loadAllCategories());
  }
  return result;
};

const loadAllNewsCategories = ({dispatch}) => next => action => {
  const result = next(action);
  if (action.type === newsTypes.news.allCategories.fetch) {
    newsCategories.forEach(category => dispatch(loadCategory(category)));
  }
  return result;
};

const loadNewsCategory = ({dispatch}) => next => action => {
  const result = next(action);
  if (action.type === newsTypes.news.category.fetch.request) {
    const category = action.payload;
    const url = getNewsHeadlinesUrl(category);
    dispatch(setCategoryLoading(category, true));
    dispatch(
      apiRequest(
        'get',
        url,
        null,
        newsTypes.news.category.fetch.success,
        newsTypes.news.category.fetch.error,
        {category},
      ),
    );
  }
  return result;
};

const newsCategoryFetchSuccess = ({dispatch}) => next => action => {
  const result = next(action);
  if (action.type === newsTypes.news.category.fetch.success) {
    const {category} = action.meta;
    const {totalResults, articles} = action.payload;
    dispatch(updateNewsArticles(category, articles, totalResults));
    dispatch(setCategoryLoading(category, false));
  }
  return result;
};

const newsCategoryLoadingError = ({dispatch}) => next => action => {
  const result = next(action);
  if (action.type === newsTypes.news.category.fetch.error) {
    const {category} = action.meta;
    dispatch(setCategoryLoading(category, false));
  }
  return result;
};

export default [
  loadNewsOnAppStart,
  loadAllNewsCategories,
  loadNewsCategory,
  newsCategoryLoadingError,
  newsCategoryFetchSuccess,
];

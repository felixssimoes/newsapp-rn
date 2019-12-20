import { createAction } from 'utils/redux';
import newsTypes from './news.types';

export const loadAllCategories = () =>
  createAction(newsTypes.news.allCategories.fetch);

export const setAllCategoriesLoading = loading =>
  createAction(newsTypes.news.allCategories.loading, loading);

export const loadCategory = category =>
  createAction(newsTypes.news.category.fetch.request, category);

export const setCategoryLoading = (category, loading) =>
  createAction(newsTypes.news.category.loading, { category, loading });

export const updateNewsArticles = (category, articles, totalResults) =>
  createAction(newsTypes.news.category.fetch.update, {
    category,
    articles,
    totalResults,
  });

export const resetNewsArticles = category =>
  createAction(newsTypes.news.category.reset, category);

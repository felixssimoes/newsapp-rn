import { newsCategories, getNewsHeadlinesForCategory } from 'data/api/news.api';
import store from 'store';
import {
  updateNewsArticles,
  setCategoryLoading,
  setAllCategoriesLoading,
  resetNewsArticles,
} from 'store/actions';
import { getCategoryResultsCount } from 'store/selectors';

const _pageSize = 20;

export const loadNewsCategoriesForAllCategories = () => {
  store.dispatch(setAllCategoriesLoading(true));
  const requests = newsCategories.map(category =>
    loadNewsForCategory(category),
  );
  Promise.all(requests).finally(() =>
    store.dispatch(setAllCategoriesLoading(false)),
  );
};

/**
 * Load the news' articles for a category
 * @param {*} category category to load news
 * @param {*} options options to load news: [page] the page to load
 */
export const loadNewsForCategory = async (category, options = {}) => {
  const { page = 0 } = options;
  store.dispatch(setCategoryLoading(category, true));

  try {
    const response = await getNewsHeadlinesForCategory(category, {
      page,
      pageSize: _pageSize,
    });
    const { totalResults, articles } = response.data;
    store.dispatch(updateNewsArticles(category, articles, totalResults));
    console.log('loaded news for category', category);
  } catch (error) {
    console.log('Error loading category', error);
  }

  store.dispatch(setCategoryLoading(category, false));
};

export const loadNextPageNewsForCategory = async category => {
  const resultsCount = getCategoryResultsCount(store.getState(), category);

  const page = resultsCount / _pageSize + 1;

  await loadNewsForCategory(category, { page });
};

export const reloadNewsForCategory = async category => {
  store.dispatch(resetNewsArticles(category));
  await loadNewsForCategory(category);
};

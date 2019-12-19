import {newsCategories, getNewsHeadlinesForCategory} from 'data/api/news.api';
import store from 'store';
import {
  updateNewsArticles,
  setCategoryLoading,
  setAllCategoriesLoading,
} from 'store/actions';

export const loadNewsCategoriesForAllCategories = () => {
  store.dispatch(setAllCategoriesLoading(true));
  const requests = newsCategories.map(category =>
    loadNewsForCategory(category),
  );
  Promise.all(requests).finally(() =>
    store.dispatch(setAllCategoriesLoading(false)),
  );
};

export const loadNewsForCategory = async category => {
  store.dispatch(setCategoryLoading(category, true));

  try {
    const response = await getNewsHeadlinesForCategory(category);
    const {totalResults, articles} = response.data;
    store.dispatch(updateNewsArticles(category, articles, totalResults));
  } catch (error) {
    console.log('Error loading category', error);
  }

  store.dispatch(setCategoryLoading(category, false));
};

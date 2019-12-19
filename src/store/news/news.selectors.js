export const getAllCategoriesLoading = state => state.news.loadingAll;

export const getCategoryLoading = (state, category) =>
  _safeCategoryState(state, category).loading || false;

export const getCategoryTotalResults = (state, category) =>
  _safeCategoryState(state, category).totalResults || 0;

export const getCategoryResultsCount = (state, category) =>
  getCategoryNewsArticles(state, category).length || 0;

export const getCategoryNewsArticles = (state, category) =>
  _safeCategoryState(state, category).articles || [];

const _safeCategoryState = (state, category) =>
  state.news.categories[category] || {};

export const getAllCategoriesLoading = state => state.news.loadingAll;

export const getCategoryLoading = (state, category) =>
  (state.news.categories[category] || {}).loading || false;

export const getCategoryTotalResults = (state, category) =>
  (state.news.categories[category] || {}).totalResults || 0;

export const getCategoryResultsCount = (state, category) =>
  ((state.news.categories[category] || {}).articles || []).length || 0;

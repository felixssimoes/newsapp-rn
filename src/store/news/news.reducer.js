import { combineReducers } from 'redux';
import newsTypes from './news.types';

const categories = (state = {}, action) => {
  switch (action.type) {
    case newsTypes.news.category.loading: {
      const { category, loading } = action.payload;
      return {
        ...state,
        [category]: {
          ...state[category],
          loading,
        },
      };
    }

    case newsTypes.news.category.fetch.update: {
      const { totalResults, articles, category } = action.payload;
      return {
        ...state,
        [category]: {
          ...state[category],
          totalResults,
          articles: [...(state[category].articles || []), ...articles],
        },
      };
    }

    case newsTypes.news.category.reset:
      return {
        ...state,
        [action.payload]: {},
      };

    default:
      return state;
  }
};

const loadingAll = (state = false, action) => {
  switch (action.type) {
    case newsTypes.news.allCategories.loading:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  categories,
  loadingAll,
});

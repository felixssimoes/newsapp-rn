import {combineReducers} from 'redux';
import newsTypes from './news.types';

const categories = (state = {}, action) => {
  switch (action.type) {
    case newsTypes.news.category.loading: {
      const {category, loading} = action.payload;
      return {
        ...state,
        [category]: {
          ...state[category],
          loading,
        },
      };
    }

    case newsTypes.news.category.fetch.update: {
      const {totalResults, articles, category} = action.payload;
      return {
        ...state,
        [category]: {
          ...state[category],
          totalResults,
          articles,
        },
      };
    }

    default:
      return state;
  }
};

export default combineReducers({
  categories,
});

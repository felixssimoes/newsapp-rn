import {combineReducers, createStore, applyMiddleware} from 'redux';

import newsMiddlware from './news/news.middleware';
import newsReducer from './news/news.reducer';

const reducers = combineReducers({
  news: newsReducer,
});

const middlewares = [...newsMiddlware];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;

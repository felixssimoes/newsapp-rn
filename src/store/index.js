import {combineReducers, createStore, applyMiddleware, compose} from 'redux';

import newsMiddlware from './news/news.middleware';
import newsReducer from './news/news.reducer';

import Reactotron from 'config/reactotron';

const reducers = combineReducers({
  news: newsReducer,
});

const middlewares = [...newsMiddlware];

const store = createStore(
  reducers,
  compose(applyMiddleware(...middlewares), Reactotron.createEnhancer()),
);

export default store;

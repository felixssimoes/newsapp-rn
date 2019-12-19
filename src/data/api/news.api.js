import axios from 'axios';
import { getNewsHeadlinesUrl } from './url_builder';
// import store from 'store';
// import {updateNewsArticles} from 'store/actions';

export const newsCategories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

// export const getNewsHeadlinesForAllCategories = async () => {
//   const requests = newsCategories.map(category =>
//     getNewsHeadlinesForCategory(category),
//   );
// };

// export const getNewsHeadlinesForCategory = async category => {
//   const url = getNewsHeadlinesUrl(category);
//   const response = await axios.get(url);
//   const {totalResults, articles} = response.data;
//   store.dispatch(updateNewsArticles(category, articles, totalResults));
//   return response;
// };

// export const getNewsHeadlinesForAllCategories = async () => {
//   const requests = newsCategories.map(category =>
//     getNewsHeadlinesForCategory(category).then(
//       ({data: {totalResults, articles}}) => {
//         return {[category]: {totalResults, articles}};
//       },
//     ),
//   );

//   try {
//     const result = (await Promise.all(requests)).reduce(
//       (value, accumulated) => ({...accumulated, ...value}),
//       {},
//     );
//     console.log(result);
//   } catch (error) {
//     console.log('Error getting headlines', error);
//   }
// };

export const getNewsHeadlinesForCategory = async category => {
  const url = getNewsHeadlinesUrl(category);
  const response = await axios.get(url);
  return response;
};

import axios from 'axios';
import {getNewsHeadlinesUrl} from './url_builder';

export const newsCategories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

export const getNewsHeadlinesForAllCategories = async () => {
  const requests = newsCategories.map(category =>
    getNewsHeadlinesForCategory(category).then(
      ({data: {totalResults, articles}}) => {
        return {[category]: {totalResults, articles}};
      },
    ),
  );

  try {
    const result = (await Promise.all(requests)).reduce(
      (value, accumulated) => ({...accumulated, ...value}),
      {},
    );
    console.log(result);
  } catch (error) {
    console.log('Error getting headlines', error);
  }
};

export const getNewsHeadlinesForCategory = async category => {
  const url = getNewsHeadlinesUrl(category);
  const response = await axios.get(url);
  return response;
};

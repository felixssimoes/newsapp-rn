import _newsApiKey from './news_api_key';

const _baseUrl = 'https://newsapi.org/v2';
const _pageSize = 20;
const _defaultCountry = 'pt';

export const getNewsHeadlinesUrl = (category, country = _defaultCountry) =>
  `${_baseUrl}/top-headlines?apikey=${_newsApiKey}&pageSize=${_pageSize}&country=${country}&category=${category}`;

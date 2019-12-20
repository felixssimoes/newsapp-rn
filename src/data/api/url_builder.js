import _newsApiKey from './news_api_key';

const _baseUrl = 'https://newsapi.org/v2';
const _defaultCountry = 'pt';

export const getNewsHeadlinesUrl = (
  category,
  page = 0,
  pageSize,
  country = _defaultCountry,
) => {
  const pageParam = page > 0 ? `&page=${page}` : '';
  return `${_baseUrl}/top-headlines?apikey=${_newsApiKey}&pageSize=${pageSize}&country=${country}&category=${category}${pageParam}`;
};

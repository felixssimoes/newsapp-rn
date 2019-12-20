export default {
  news: {
    allCategories: {
      fetch: 'news.news.allCategories.fetch',
      loading: 'news.news.allCategories.loading',
    },
    category: {
      loading: 'news.news.category.loading',
      reset: 'news.news.category.reset',
      fetch: {
        request: 'news.news.category.fetch.request',
        success: 'news.news.category.fetch.success',
        error: 'news.news.category.fetch.error',
        update: 'news.news.category.fetch.update',
      },
    },
  },
};

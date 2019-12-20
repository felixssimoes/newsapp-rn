import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';

import {
  getCategoryNewsArticles,
  getCategoryTotalResults,
  getCategoryResultsCount,
  getCategoryLoading,
} from 'store/selectors';
import Article from 'ui/components/news/article';
import {
  loadNextPageNewsForCategory,
  reloadNewsForCategory,
} from 'data/repository/news.repository';

const _windowWidth = Dimensions.get('window').width;
const _margin = 12;
const _columnWidth = (_windowWidth - _margin * 3) / 2;

const ViewAllNewsScreen = ({ navigation }) => {
  const category = navigation.getParam('category');
  const [isLoadingMore, setLoadingMore] = useState(false);

  const isLoading = useSelector(state => getCategoryLoading(state, category));
  const news = useSelector(state => getCategoryNewsArticles(state, category));
  const totalResults = useSelector(state =>
    getCategoryTotalResults(state, category),
  );
  const resultsCount = useSelector(state =>
    getCategoryResultsCount(state, category),
  );

  const onPressArticle = article => {
    navigation.navigate('detail', { article });
  };

  const renderItem = ({ item: article }) => {
    return (
      <TouchableOpacity onPress={() => onPressArticle(article)}>
        <Article style={{ width: _columnWidth }} article={article} />
      </TouchableOpacity>
    );
  };

  const onLoadMore = async () => {
    if (isLoadingMore || resultsCount >= totalResults) {
      return;
    }
    setLoadingMore(true);
    console.log('will load next page of news for category', category);
    try {
      await loadNextPageNewsForCategory(category);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingMore(false);
    }
  };

  const onRefresh = () => {
    reloadNewsForCategory(category);
  };

  const renderFooter = () => {
    return (
      <SafeAreaView>{isLoadingMore && <ActivityIndicator />}</SafeAreaView>
    );
  };

  return (
    <FlatList
      style={styles.screenContainer}
      data={news}
      keyExtractor={(article, index) => `allnews_${article.title}_${index}`}
      renderItem={renderItem}
      numColumns={2}
      initialNumToRender={10}
      ListHeaderComponent={<View style={styles.listHeader} />}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.25}
      ListFooterComponent={renderFooter}
      onRefresh={onRefresh}
      refreshing={isLoading}
    />
  );
};

ViewAllNewsScreen.navigationOptions = ({ navigation }) => {
  const category = navigation.getParam('category');
  return {
    title: category,
  };
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  listHeader: {
    height: 20,
  },
});

export default ViewAllNewsScreen;

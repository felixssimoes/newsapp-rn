import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useSelector } from 'react-redux';

import { getCategoryNewsArticles } from 'store/selectors';
import Article from 'ui/components/news/article';

const _windowWidth = Dimensions.get('window').width;
const _margin = 12;
const _columnWidth = (_windowWidth - _margin * 3) / 2;

const ViewAllNewsScreen = ({ navigation }) => {
  const category = navigation.getParam('category');
  const news = useSelector(state => getCategoryNewsArticles(state, category));

  const renderItem = ({ item: article }) => {
    return <Article style={{ width: _columnWidth }} article={article} />;
  };

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={news}
        keyExtractor={(article, index) => `allnews_${article.title}_${index}`}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={<View style={styles.listHeader} />}
        ListFooterComponent={<SafeAreaView />}
      />
    </View>
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

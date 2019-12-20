import React from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { newsCategories } from 'data/api/news.api';
import { getAllCategoriesLoading } from 'store/selectors';
import CategoryGroup from 'ui/components/news/category_group';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  const loadingAll = useSelector(state => getAllCategoriesLoading(state));

  const onPressViewAll = category => {
    navigation.navigate('all', { category });
  };

  const onPressArticle = article => {
    navigation.navigate('detail', { article });
  };

  const renderCategories = () => {
    return newsCategories.map(category => {
      return (
        <CategoryGroup
          key={category}
          category={category}
          onPressViewAll={onPressViewAll}
          onPressArticle={onPressArticle}
        />
      );
    });
  };

  return (
    <React.Fragment>
      {!loadingAll && (
        <ScrollView style={styles.container}>
          {[...renderCategories(), <SafeAreaView key={'home_list_footer'} />]}
        </ScrollView>
      )}
      {loadingAll && (
        <ActivityIndicator size="large" style={StyleSheet.absoluteFill} />
      )}
    </React.Fragment>
  );
};

HomeScreen.navigationOptions = {
  title: 'News',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;

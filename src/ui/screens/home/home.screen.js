import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';

import { newsCategories } from 'data/api/news.api';
import {
  getAllCategoriesLoading,
  getCategoryLoading,
  getCategoryResultsCount,
} from 'store/selectors';

const HomeCategory = ({ category }) => {
  const loading = useSelector(state => getCategoryLoading(state, category));
  const totalResults = useSelector(state =>
    getCategoryResultsCount(state, category),
  );

  return (
    <View key={category} style={styles.categoryCell}>
      <Text style={styles.categoryText}>{category}</Text>
      {loading && <ActivityIndicator size="small" />}
      {!loading && <Text>{totalResults}</Text>}
    </View>
  );
};

const HomeScreen = () => {
  const loadingAll = useSelector(state => getAllCategoriesLoading(state));

  const renderCategories = () => {
    return newsCategories.map(category => {
      return <HomeCategory key={category} category={category} />;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>All Categories</Text>
      <View style={styles.topSpacer} />
      {renderCategories()}
      {loadingAll && (
        <ActivityIndicator size="large" style={StyleSheet.absoluteFill} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topSpacer: {
    height: 22,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  titleText: { alignSelf: 'stretch', textAlign: 'center', fontSize: 24 },
  container: { flex: 1, backgroundColor: '#fff' },
  categoryText: {
    fontSize: 16,
  },
  categoryCell: {
    flexDirection: 'row',
    height: 55,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});

export default HomeScreen;

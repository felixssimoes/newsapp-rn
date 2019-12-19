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
import { getAllCategoriesLoading } from 'store/selectors';
import CategoryGroup from 'ui/components/news/category_group';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const loadingAll = useSelector(state => getAllCategoriesLoading(state));

  const renderCategories = () => {
    return newsCategories.map(category => {
      return <CategoryGroup key={category} category={category} />;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>All Categories</Text>
      <View style={styles.topSpacer} />
      {!loadingAll && <ScrollView>{renderCategories()}</ScrollView>}
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
});

export default HomeScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

import { getCategoryLoading, getCategoryNewsArticles } from 'store/selectors';
import Article from './article';

export const options = {
  size: 'small',
  horizontal: false,
  grid: false,
  wrapper: true,
};

const CategoryGroup = ({ category }) => {
  const loading = useSelector(state => getCategoryLoading(state, category));
  const articles = useSelector(state =>
    getCategoryNewsArticles(state, category).slice(0, 6),
  );

  return (
    <View>
      <Header title={category} onPressViewAll={() => {}} />
      {loading && <ActivityIndicator size="small" />}
      {articles.length > 0 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            ...articles.map(article => (
              <Article
                key={`article_${article.title}${article.publishedAt}`}
                article={article}
              />
            )),
            <View
              key={`${category}_finalspace`}
              style={styles.groupFinalSpace}
            />,
          ]}
        </ScrollView>
      )}
    </View>
  );
};

const Header = ({ title, onPressViewAll, style }) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionHeaderText, style]}>{title}</Text>
      {onPressViewAll && (
        <TouchableOpacity onPress={onPressViewAll}>
          <Text style={[style, styles.viewAllText]}>View All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

let font = Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto';

const styles = StyleSheet.create({
  groupFinalSpace: { width: 12 },
  categoryText: {
    fontSize: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8 * 1.5,
  },

  sectionHeaderText: {
    color: '#363434',
    fontSize: 19,
    fontWeight: 'bold',
    fontFamily: font,
    flex: 1,
  },
  viewAllText: {
    color: '#D1644F',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: font,
  },
});

export default CategoryGroup;

import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const _minHeight = 105;

const ArticleImage = ({ image, style, imageStyle }) => {
  let Component = image ? Image : View;
  let props = image ? { source: { uri: image } } : {};

  return (
    <View style={[styles.imageContainer, style]}>
      <Component style={[styles.imageContent, imageStyle]} {...props} />
    </View>
  );
};

const Article = ({ article, style }) => {
  const source = article.source.name;
  const snippet = article.content;
  const time = article.publishedAt;

  const renderSource = () => {
    if (!source) {
      return null;
    }

    return <Text style={styles.articleSourceText}>{source}</Text>;
  };

  const renderSnippet = () => {
    if (!snippet) {
      return null;
    }

    return (
      <Text numberOfLines={3} style={styles.articleSnippetText}>
        {snippet}
      </Text>
    );
  };

  const renderTime = () => {
    if (!time) {
      return null;
    }
    return <Text style={styles.articlePublishedTimeText}>{time}</Text>;
  };

  return (
    <View style={[styles.articleCardContainer, style]}>
      <ArticleImage image={article.urlToImage} />
      <View style={styles.articleInfoContainer}>
        {renderSource()}
        {renderSnippet()}
        {renderTime()}
      </View>
    </View>
  );
};

ArticleImage.propTypes = {
  image: PropTypes.string,
  style: PropTypes.object,
  imageStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  articleInfoContainer: {
    marginHorizontal: 12,
    marginBottom: 12,
    marginTop: 8,
  },
  articleCardContainer: {
    width: 183,
    backgroundColor: '#fff',
    shadowColor: '#c2c4cb',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.81,
    shadowRadius: 5.16,
    elevation: 20,
    marginLeft: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  articlePublishedTimeText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#A5A5A4',
    marginRight: 5,
  },
  articleSnippetText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#363434',
    marginBottom: 6,
  },
  articleSourceText: {
    color: '#D66215',
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '400',
  },
  imageContainer: {
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageContent: {
    height: _minHeight,
  },
});

export default Article;

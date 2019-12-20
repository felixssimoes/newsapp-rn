import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const NewsArticleScreen = ({ navigation }) => {
  const article = navigation.getParam('article');
  return (
    <WebView style={styles.screenContainer} source={{ uri: article.url }} />
  );
};

NewsArticleScreen.navigationOptions = ({ navigation }) => {
  const article = navigation.getParam('article');
  return {
    title: article.title,
  };
};

export default NewsArticleScreen;

const styles = StyleSheet.create({
  screenContainer: { flex: 1 },
});

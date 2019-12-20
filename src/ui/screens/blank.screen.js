import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({ navigation }) => {
  const message = navigation.getParam('message');
  return (
    <View style={styles.container}>
      <Text>{message || 'News App'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

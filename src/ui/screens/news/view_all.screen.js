import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ViewAllNewsScreen = ({ navigation }) => {
  const category = navigation.getParam('category');
  return (
    <View style={styles.screenContainer}>
      <Text>{`All news for ${category}`}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ViewAllNewsScreen;

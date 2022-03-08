import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
const App = () => {
  return <SafeAreaView style={styles.Container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

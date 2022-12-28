import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

const App = () => (
  <View style={styles.container}>
    <StartGameScreen />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

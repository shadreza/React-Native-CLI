import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

const App = () => (
  <View style={styles.mainScreen}>
    <StartGameScreen />
  </View>
);

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: '#FED049',
    flex: 1,
  },
});

export default App;

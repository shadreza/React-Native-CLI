import React from 'react';
// eslint-disable-next-line prettier/prettier
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Your Course Goal!" />
        <Button title="Add a Goal" />
      </View>
      <View>
        <Text>List of goals ...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});

export default App;

import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.goalItem}>
      <Text>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#ccceee',
    marginTop: 12,
    borderRadius: 6,
  },
});

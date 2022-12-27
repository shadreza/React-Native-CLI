import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const GoalItem = () => {
  return (
    <View style={styles.goalItem}>
      <Text>{itemData.item.text}</Text>
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

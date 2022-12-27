import React from 'react';
// eslint-disable-next-line prettier/prettier
import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = props => {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text>{props.text}</Text>
      </View>
    </Pressable>
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

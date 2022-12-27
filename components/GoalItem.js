import React from 'react';
// eslint-disable-next-line prettier/prettier
import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#dddddd'}}
        style={({pressed}) => pressed && styles.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#79018C',
    marginTop: 12,
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.4,
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});

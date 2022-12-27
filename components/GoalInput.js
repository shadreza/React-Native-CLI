// eslint-disable-next-line prettier/prettier
import React, { useState } from 'react';
// eslint-disable-next-line prettier/prettier
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = props => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const onAddGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add a Goal" onPress={onAddGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 8,
    flex: 0.9,
    marginRight: 8,
  },
});

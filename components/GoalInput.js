// eslint-disable-next-line prettier/prettier
import React, { useState } from 'react';
// eslint-disable-next-line prettier/prettier
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

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
    <Modal visible={props.modalVisibility} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add a Goal" onPress={onAddGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 8,
    width: '90%',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
});

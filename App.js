// eslint-disable-next-line prettier/prettier
import React, { useState } from 'react';
// eslint-disable-next-line prettier/prettier
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState({});

  const [goals, setGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    // @ts-ignore
    setGoals(currentGoals => [
      ...currentGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add a Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={itemData => <GoalItem />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
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
  goalsContainer: {
    flex: 5,
    marginBottom: 24,
  },
});

export default App;

// eslint-disable-next-line prettier/prettier
import React, { useState } from 'react';
// eslint-disable-next-line prettier/prettier
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const [goals, setGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    // @ts-ignore
    setGoals(currentGoals => [...currentGoals, enteredGoalText]);
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
        <ScrollView>
          {goals.map(goal => (
            <Text style={styles.goalContainer} key={goal}>
              {goal}
            </Text>
          ))}
        </ScrollView>
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
  goalContainer: {
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#ccceee',
    marginTop: 12,
    borderRadius: 6,
    overflow: 'hidden',
  },
});

export default App;

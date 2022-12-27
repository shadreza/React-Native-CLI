// eslint-disable-next-line prettier/prettier
import React, { useState } from 'react';
// eslint-disable-next-line prettier/prettier
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = enteredGoalText => {
    // @ts-ignore
    setGoals(currentGoals => [
      ...currentGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };

  const onDeleteGoalHandler = id => {
    // @ts-ignore
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item, index) => {
            // @ts-ignore
            return item.id;
          }}
          renderItem={itemData => (
            <GoalItem
              // @ts-ignore
              text={itemData.item.text}
              // @ts-ignore
              id={itemData.item.id}
              onDeleteItem={onDeleteGoalHandler}
            />
          )}
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
  goalsContainer: {
    flex: 5,
    marginBottom: 24,
  },
});

export default App;

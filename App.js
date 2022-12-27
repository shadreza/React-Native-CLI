// eslint-disable-next-line prettier/prettier
import React, { useState } from 'react';
// eslint-disable-next-line prettier/prettier
import { Button, FlatList, StatusBar, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = enteredGoalText => {
    // @ts-ignore
    setGoals(currentGoals => [
      ...currentGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };

  const onDeleteGoalHandler = id => {
    // @ts-ignore
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#6D67E4"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          modalVisibility={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCloseModal={endAddGoalHandler}
        />
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
    </>
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

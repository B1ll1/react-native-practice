import React, { useState, FC, ReactElement } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5,
  },
});

const App: FC = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText): void => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = (): void => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item): string => item.id}
        data={courseGoals}
        renderItem={(itemData): ReactElement => <Text style={styles.listItem}>{itemData.item.value}</Text>}
      />
    </View>
  );
};

export default App;

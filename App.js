import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [courseText, setCourseText] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const addHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return
    };

    setCourseText(currentText => [
      ...currentText,
      {
        id: Math.random().toString(),
        value: goalTitle
      }]);
    setIsAddModal(false);
  };

  const removeHandler = goalId => {
    setCourseText(currentText => {
      return currentText.filter(goal => goal.id !== goalId);
    })
  };

  const cancelAddModal = () => {
    setIsAddModal(false);
  };

  return (
    <View style={styles.screen}>
      <Button
        title='Add New Goal'
        onPress={() => setIsAddModal(true)}
      />
      <GoalInput
        visible={isAddModal}
        addHandler={addHandler}
        onCancel={cancelAddModal}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseText}
        renderItem={itemData => {
          return (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeHandler}
              title={itemData.item.value}
            />
          )
        }}
      />

      <View style={{
        flexDirection: 'row',
        width: '80%',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'stretch'
      }}>
        <View style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>1</Text>
        </View>
        <View style={{
          backgroundColor: 'blue',
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>2</Text>
        </View>
        <View style={{
          backgroundColor: 'yellow',
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});

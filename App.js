import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [courseText, setCourseText] = useState([]);

  function inputHandler(enterText) {
    setText(enterText);
  }

  const addHandler = () => {
    // console.log("text ", text);
    setCourseText(currentText => [...currentText,
    {
      id: Math.random().toString(),
      value: text
    }])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={inputHandler}
          value={text}
        />
        <Button title="ADD" onPress={addHandler} />
      </View>

      {/* <ScrollView>
        {courseText.map(item => {
          return (
            <View key={item} style={styles.listItem}>
              <Text>{item}</Text>
            </View>
          )
        })}
      </ScrollView> */}

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseText}
        renderItem={itemData => {
          return (
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
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
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

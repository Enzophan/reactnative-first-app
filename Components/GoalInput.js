import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

function GoalInput(props) {

    const [enterGoal, setEnterGoal] = useState('');

    function inputHandler(enterText) {
        setEnterGoal(enterText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={inputHandler}
                value={enterGoal}
            />
            <Button title="ADD" onPress={props.addHandler.bind(this, enterGoal)} />
        </View>
    )
};

const styles = StyleSheet.create({
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
    }
})

export default GoalInput
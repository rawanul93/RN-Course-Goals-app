import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';
import React, { useState } from 'react';

const GoalInput = ({onAddGoal, visible, onCancel}) => {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('./../assets/images/image1.jpg')}/>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} // adding the value and binding input text to this view element
                />

                <View style={styles.buttonContainer}>
                    
                    <View style={styles.button}>
                        <Button title='Cancel'
                            onPress={onCancel}
                            color='red'    

                        />
                    </View>

                    <View style={styles.button}>
                        <Button title='Add Goal'
                            onPress={addGoalHandler}
                            color='rgb(18, 140, 77)'    
                            />
                    </View>
                </View>
            </View>
        </Modal>
        
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,        
        "backgroundColor": "#003017"

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%', // take 80% of the available width.
        marginRight: 8,
        padding: 16,
        // color: '#ffffff',
        backgroundColor: '#fff'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'space-between',

    },
    button: {
        width: 100,
        marginHorizontal: 8
    },

    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
})

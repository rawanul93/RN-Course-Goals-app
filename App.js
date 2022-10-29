import React, { useState } from 'react';
import {
    StyleSheet,
    ScrollView, // renders all the items in the list.
    FlatList, //only render items that are visible lazily.
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    }

    const endAddGoalHandler = () => {
        setModalIsVisible(false);
    }

    const addGoalHandler = (enteredGoalText) => {
        //setCourseGoals([...courseGoals, enteredGoalText]); // this is not the best way to update state when the new state depends on the prev state
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]) // currentCourseGoals i.e. prevState is provided by react.
        endAddGoalHandler();
    }

    const deleteGoalHandler = (id) => {
        setCourseGoals(currentCourseGoals => {
            return currentCourseGoals.filter((goal) => goal.id !== id)
        })
    }

    return (

        <>
            <StatusBar style='light' />

            <View style={
                styles.appContainer
            }>

                <Button title='Add new goal' color='rgb(18, 140, 77)' onPress={startAddGoalHandler}/>
                <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}/>

                <View style={styles.goalsContainer}>
                    <FlatList data={courseGoals}    // Flatlist works better when the data being fed to it is in a object format. It also looks for the key property for each item and uses that as the key for having unique items.
                        // If we do not have the key property, we can use the keyExtractor prop to generate keys.
                        keyExtractor={(item, index) => {
                            return item.id+index;
                        }}
                        renderItem={itemData => {
                            return (
                                <GoalItem 
                                    itemText={itemData.item.text} 
                                    onDeleteItem={deleteGoalHandler}
                                    id={itemData.item.id}

                                />
                            ); 
                        }}
                        alwaysBounceVertical={true}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },

    goalsContainer: {
        flex: 5
    },
});


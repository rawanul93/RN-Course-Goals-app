import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({itemText, onDeleteItem, id}) => {
    return (
       
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{color: '#dddddd'}} // this is specific to android.
                onPress={onDeleteItem.bind(this, id)}
                style={({pressed}) => pressed && styles.pressedItem} //pressed is provided by pressable. Also we can pass a function inside the style prop as well.
            >
                <Text style={styles.goalText}>{itemText}</Text>
            </Pressable>
        </View>
       
        
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#000000',
    },

    goalText: {
        color: '#ffffff',
        padding: 8,
    },

    pressedItem : {
        opacity: 0.5
    }
})



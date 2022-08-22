import React from "react";
import  {View, Button, StyleSheet} from "react-native";
const TodoDelete = (props:any) => {
    const deleteTask = (id:any) => {
        console.log(id);
        
        props.delete(id);
    }
    return (
        <View>
            <View style={styles.container}>
                <Button
                    color={'red'}
                    title="Delete"
                    onPress={() => deleteTask(props.id)}
                />
            </View>
        </View>
    );
    }



const styles = StyleSheet.create({
    container: {
        marginLeft:10,
    },
});

export default TodoDelete;
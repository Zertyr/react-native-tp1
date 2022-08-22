import React from "react";
import  {View, Button, StyleSheet} from "react-native";
const TodoState = (props:any) => {
    const changeState = (id:any) => {
        props.changeTask(id);
    }
    return (
        <View>
            <View style={styles.container}>
                <Button
                    color={'green'}
                    title="Finish"
                    onPress={() => changeState(props.id)}
                />
            </View>
        </View>
    );
    }



const styles = StyleSheet.create({
    container: {
    },
});

export default TodoState;
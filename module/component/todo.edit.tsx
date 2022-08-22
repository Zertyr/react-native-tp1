import React from "react";
import { View, Button, StyleSheet } from "react-native";
const TodoEdit = (props: any) => {
  const editTask = (task: any, name: string) => {
    console.log("task: " + task + " name: " + name);

    task.task = name;
    props.edit(task);
  };
  return (
    <View>
      <View style={styles.container}>
          <Button
            color={"orange"}
            title="Edit"
            onPress={() => editTask(props.task, props.name)}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
});

export default TodoEdit;

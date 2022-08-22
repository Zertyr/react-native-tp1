import {
  Button,
  FlatList,
  Text,
  View,
  StyleSheet,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { TodoModel } from "../model/todo.model";
import TodoDelete from "./todo.delete";
import TodoEdit from "./todo.edit";
import TodoState from "./todo.state";

const TodoDisplay = (props: any) => {
  const [todo, setTodo] = useState(props.todo);

  const [refreshing, setRefreshing] = React.useState(false);
  const wait = (timeout: any) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({ item }: any) => (
    console.log("item: " + JSON.stringify(item)),
    (
      <View style={styles.item}>
        {item.completed == false && (
          <Text style={styles.title}>{item.task}</Text>
        )}
        {item.completed == true && (
          <Text style={styles.title}>{item.task} - completed</Text>
        )}
        <View style={styles.btnView}>
          {item.completed == false && (
            <TodoState id={item.id} changeTask={props.changeTask}></TodoState>
          )}
          {item.completed == false && (
            <TodoEdit
              task={item}
              name={props.name}
              edit={props.edit}
            ></TodoEdit>
          )}
          <TodoDelete id={item.id} delete={props.delete}></TodoDelete>
        </View>
      </View>
    )
  );
 
  return (
    <View style={styles.container}>
      <FlatList
        data={props.todo}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default TodoDisplay;

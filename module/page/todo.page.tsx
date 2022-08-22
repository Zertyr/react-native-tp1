import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import TodoDisplay from "../component/todo.display";
import { TodoModel } from "../model/todo.model";
import { TodoService } from "../service/data.service";
let service: TodoService = new TodoService();



const TodoPage = () => {

    const deleteTodo = (id: any) => {
        setTodoList(service.deleteData(id));
      }

      let todo = service.getData();
const [todoList, setTodoList] = useState(todo);
    const editTodo = (task: any) => {
        onChangeText('');
        return setTodoList(service.updateData(task));
     }

    const addTodo = (task: string) => {
        if(task.length > 0 && task !== "") {
            let newTask = new TodoModel(task);
            onChangeText('');
            return setTodoList(service.addData(newTask));
        }
    }
    const changeTask = (id: any) => {
        reformText(' ');
        setTodoList(service.changeState(id));
        
    }

    const [text, onChangeText] = useState("");
    const reformText = (text:string) => {
        onChangeText(text);
    }
    return(
        <View style={styles.container}>
                <Text style={styles.title}>TodoPage</Text>
                <View style={styles.addInput}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <Button title="Add" onPress={() => addTodo(text)}></Button>
                </View>
                <TodoDisplay todo={todoList} delete={deleteTodo} name={text} edit={editTodo} changeTask={changeTask}></TodoDisplay>
        </View>
    ) 
    }

    const styles = StyleSheet.create({
        container: {
            marginTop: '20%',
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
        },
        title: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: '50%',
          },
          addInput: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            },
    });
    export default TodoPage;
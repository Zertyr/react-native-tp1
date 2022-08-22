import React, { useState } from "react";
import { DevSettings } from "react-native";
import data from "../data/todo.data";
import { TodoModel } from "../model/todo.model";

export class TodoService {

  todoData: TodoModel[] = data;

  getData () {
    return this.todoData;
  };

  addData(data: TodoModel) {
    this.todoData.push(data);
    return this.todoData;
  }

  updateData(data: TodoModel) {
    this.todoData.forEach((todo: TodoModel) => {
        if (todo.id === data.id) {
            todo.task = data.task;
        }
    });
    let newArr:any = [];
    newArr = this.todoData;
    return newArr;
}

changeState(id: any) {
    this.todoData.forEach((todo: TodoModel) => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
    });
    return this.todoData;
}

  deleteData(id: number) {
    this.todoData = this.todoData.filter(
      (todo: TodoModel) => todo.id !== id
    )
    console.log("delete" + JSON.stringify(this.todoData));
    
    return this.todoData;
  };
}


/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Do laundry", completed: true },
    { id: 2, text: "Go to gym", completed: false },
    { id: 3, text: "Walk dog", completed: true },
  ]);

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
        <Text style={styles.title}>My ToDo List</Text>

        <ToDoList tasks={tasks} onToggleTask={toggleTask} />

        <ToDoForm onAddTask={addTask} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
});

export default App;

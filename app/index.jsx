/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import ToDoList from "../components/ToDoList";

function App() {
  // State for tasks - starting with your hard-coded tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: "Do laundry", completed: true },
    { id: 2, text: "Go to gym", completed: false },
    { id: 3, text: "Walk dog", completed: true },
  ]);

  // State for the input field
  const [inputText, setInputText] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (inputText.trim() === "") {
      Alert.alert("Error", "Please enter a task");
      return;
    }

    const newTask = {
      id: Date.now(), // Simple ID generation
      text: inputText.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputText(""); // Clear the input
  };

  // Function to toggle task completion
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

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={addTask} // Add task when pressing enter
          />
          <Button title="Add" onPress={addTask} />
        </View>
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
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
});

export default App;

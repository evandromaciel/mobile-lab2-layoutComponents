/**
 * ToDoForm Component
 * Form for adding new tasks to the list
 */

import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

function ToDoForm({ onAddTask }) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = () => {
    if (inputText.trim() === "") {
      Alert.alert("Error", "Please enter a task");
      return;
    }

    onAddTask(inputText.trim());
    setInputText(""); // Clear the input
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={handleSubmit} // Add task when pressing enter
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
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

export default ToDoForm;

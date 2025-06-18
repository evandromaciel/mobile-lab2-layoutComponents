/**
 * ToDoList Component
 * Displays the list of tasks with toggle and delete functionality
 */

import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

function ToDoList({ tasks, onToggleTask }) {
  return (
    <ScrollView style={styles.scrollView}>
      {tasks.map((task) => (
        <Pressable key={task.id} onPress={() => onToggleTask(task.id)}>
          <View style={[styles.task, task.completed && styles.completed]}>
            <Text
              style={[styles.taskText, task.completed && styles.completedText]}>
              {task.text}
            </Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  task: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  completed: {
    backgroundColor: "#e8f5e9",
  },
  taskText: {
    fontSize: 16,
    color: "#333",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});

export default ToDoList;

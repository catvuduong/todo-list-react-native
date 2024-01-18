import React, { useState } from "react";

import { Alert, ScrollView, Text, View } from "react-native";

import Task from "./components/Task";

import styles from "./App.components.style";
import Form from "./components/Form";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    //add task
    setTaskList([...taskList, task]);
  };

  const handleDeleteTask = (index) => {
    Alert.alert("Thông báo !!!", "Bạn có chắc chắn muốn xóa?", [
      {
        text: "Ok",
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
      },
      { text: "cancel", onPress: () => {} },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => (
            <Task
              key={index}
              title={item}
              number={index + 1}
              onDeleteTask={() => handleDeleteTask(index)}
            />
          ))}
        </ScrollView>
      </View>

      <Form onAddTask={handleAddTask} />
    </View>
  );
}

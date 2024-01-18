import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./styles";

const Form = (props) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.length === 0) {
      alert("Mời nhập vào công việc cho danh sách");
      return false;
    }
    props.onAddTask(task);
    setTask("");
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      // keyboardVerticalOffset={5}
      style={styles.addTask}
    >
      <TextInput
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder="Your Task"
        style={styles.input}
      />
      <TouchableOpacity>
        <View style={styles.iconWrapper}>
          <Text onPress={handleAddTask} style={styles.icon}>
            +
          </Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;

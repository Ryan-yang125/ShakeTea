import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { Button, Text } from "react-native-elements";
import { View } from "react-native";
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Button buttonStyle={styles.startButton} title="点击开始" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(232, 214, 192, 100)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  startButton: {
    width: 170,
    height: 40,
    lineHeight: 23,
    fontSize: 16,
    borderWidth: 0,
    fontFamily: "apple-system",
    backgroundColor: "rgb(228, 141, 113)",
    borderRadius: 25,
  },
});

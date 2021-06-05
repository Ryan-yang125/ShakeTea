import React, { useState } from "react";

import { StyleSheet } from "react-native";

import { Button, Text } from "react-native-elements";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MusicPlayer() {
  return (
    <View style={styles.playerContainer}>
      <MaterialCommunityIcons name="music" size={26} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    backgroundColor: "rgba(228, 141, 113, 100)",
    borderRadius: 30,
    width: 49,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

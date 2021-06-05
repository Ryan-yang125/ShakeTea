import React, { useState } from "react";

import { StyleSheet } from "react-native";

import { Button, Text } from "react-native-elements";
import { View } from "react-native";

export default function MusicPlayer() {
  return <View style={styles.playerContainer}></View>;
}

const styles = StyleSheet.create({
  playerContainer: {
    backgroundColor: "rgba(228, 141, 113, 100)",
    borderRadius: 30,
    width: 49,
    height: 48,
  },
});

import React, { useState } from "react";

import { StyleSheet } from "react-native";

import { Button, Text } from "react-native-elements";
import { View } from "react-native";

export default function BottomView() {
  return (
    <View style={styles.playerContainer}>
      <Text> 奶茶占卜——解决你的选择困难 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    backgroundColor: "rgba(248, 248, 248, 100)",
    color: "rgba(16, 16, 16, 50)",
    fontSize: 14,
    textAlign: "center",
    width: 390,
    height: 40,
    lineHeight: 20,
  },
});

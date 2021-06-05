import React, { useState } from "react";

import { StyleSheet } from "react-native";
import { Button, Text, Image } from "react-native-elements";
import { View } from "react-native";

export default function ShakeDetailsScreen() {
  return <View style={styles.rootContainer}></View>;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFAB90",
  },
});

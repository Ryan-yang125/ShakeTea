import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { Button, Text } from "react-native-elements";
import { View } from "react-native";

import MusicPlayer from "../components/MusicPlayer";

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.musicPlayerContainer}>
        <MusicPlayer />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textSlogn}>
          摇一摇 {"\n"}获取你的 {"\n"}专属奶茶
        </Text>
      </View>
      <Button
        buttonStyle={styles.startButton}
        containerStyle={styles.startButtonContanier}
        title="点击开始"
        onPress={() => navigation.navigate("Shake")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "rgba(232, 214, 192, 100)",
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
  startButtonContanier: {
    position: "absolute",
    left: 220,
    top: 720,
  },
  textSlogn: {
    textAlign: "left",
    fontSize: 48,
    lineHeight: 80,
    // fontFamily: "PingFangSC",
    color: "rgba(255, 255, 255, 100)",
  },
  textContainer: {
    position: "absolute",
    left: 49,
    top: 208,
    width: 252,
    height: 300,
  },
  musicPlayerContainer: {
    position: "absolute",
    left: 301,
    top: 52,
  },
});

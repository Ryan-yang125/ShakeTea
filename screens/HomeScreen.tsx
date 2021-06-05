import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { Button, Text } from "react-native-elements";
import { View } from "react-native";

import MusicPlayer from "../components/MusicPlayer";

const delay = 800;
export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.homeContainer}>
      <Animatable.View
        animation="rotate"
        iterationCount="infinite"
        easing="linear"
        duration={2000}
        style={styles.musicPlayerContainer}
      >
        <MusicPlayer />
      </Animatable.View>
      <AnimatedTexts />
      <Animatable.View animation="fadeInUpBig" delay={3 * delay}>
        <Button
          buttonStyle={styles.startButton}
          containerStyle={styles.startButtonContanier}
          title="点击开始"
          onPress={() => navigation.navigate("Shake")}
        />
      </Animatable.View>
    </View>
  );
}

function AnimatedTexts() {
  const texts = ["摇一摇", "获取你的", "专属奶茶"];
  const animatedTexts = texts.map((text, index) => (
    <Animatable.Text
      animation="fadeInUp"
      style={styles.textSlogn}
      delay={index * delay}
      key={text}
    >
      {text}
    </Animatable.Text>
  ));
  return <View style={styles.textContainer}>{animatedTexts}</View>;
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
    left: 320,
    top: 52,
  },
});

import React, { useState, useEffect } from "react";
import * as Animatable from "react-native-animatable";

import { StyleSheet } from "react-native";
import { Button, Text, Image } from "react-native-elements";
import { View } from "react-native";
// import { ShakeEventExpo } from "../utils/ShakeEvent";
// import RNShake from "react-native-shake";
export default function ShakeScreen() {
  useEffect(() => {
    // ShakeEventExpo.addListener(() => {
    //   //add your code here
    //   alert("Shake Shake Shake");
    // });
  }, []);
  return (
    <View style={styles.rootContainer}>
      <Animatable.View
        animation="swing"
        iterationCount="infinite"
        style={styles.teaLogoContainer}
      >
        <Image
          source={require("../assets/images/tea.png")}
          style={styles.teaLogo}
        />
      </Animatable.View>
      <View style={styles.textContainer}>
        <Text style={styles.textSlogn}>摇一摇手机</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "rgba(207, 227, 228, 100)",
  },
  teaLogo: {
    width: 400,
    height: 400,
  },
  teaLogoContainer: {
    position: "absolute",
    // left: 50,
    top: 51,
  },
  textSlogn: {
    textAlign: "center",
    fontSize: 48,
    fontWeight: "bold",
    lineHeight: 80,
    color: "rgba(255, 255, 255, 100)",
  },
  textContainer: {
    position: "absolute",
    left: 76,
    top: 563,
    width: 252,
    height: 300,
  },
});

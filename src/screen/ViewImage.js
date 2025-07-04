import React from "react";
import { View, Image, StyleSheet, Text, ImageBackground } from "react-native";

export default function ViewImage() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/HomePage.jpg")} // ✅ Ensure this image exists
        style={styles.background}
      >
        <View style={styles.content}>
          <Image
            source={require("../../assets/NextPage.jpg")} // ✅ Same image shown as foreground
            style={styles.image}
          />
          <Text style={styles.text}>Hello Image</Text>
        </View>

        <View style={styles.colorBars}>
          <View style={[styles.bar, { backgroundColor: "green" }]} />
          <View
            style={[styles.bar, { backgroundColor: "yellow", marginTop: 10 }]}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  content: {
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    width: 300,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  colorBars: {
    width: "100%",
    alignItems: "center",
  },
  bar: {
    height: 60,
    width: "100%",
  },
});

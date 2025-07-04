import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

export default function ViewImage() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/NextPage.jpg")} // ✅ Ensure this image exists
        style={styles.background}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: "red",
              width: 50,
              height: 50,
              position: "absolute",
              top: 20,
              left: 20,
            }}
          />
          <View
            style={{
              backgroundColor: "yellow",
              width: 50,
              height: 50,
              position: "absolute",
              top: 20,
              right: 20,
            }}
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
  },
});

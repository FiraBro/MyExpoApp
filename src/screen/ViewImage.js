import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function ViewImage() {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require("../../assets/NextPage.jpg")} // ✅ Ensure this image exists
        style={style.background}
      >
        <View style={{ flex: 1 }}>
          <View style={style.closeIcon}>
            <MaterialCommunityIcons name="close" size={35} color="white" />
          </View>
          <View style={style.deleteIcon}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={35}
              color="white"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  deleteIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});

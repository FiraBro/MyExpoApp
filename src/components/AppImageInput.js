import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppButton from "../components/AppButton";
import * as ImagePicker from "expo-image-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";

export default function AppImageInput({ imageUri }) {
  const cancelSelect = async () => {
    try {
      setImageUri(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons
          name="camera"
          size={35}
          style={{ color: colors.medium }}
        />
      )}
      {imageUri && (
        <Pressable onPress={cancelSelect}>
          <Image
            source={{ uri: imageUri }}
            style={{ width: 200, height: 200, marginTop: 10 }}
            onPress={cancelSelect}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

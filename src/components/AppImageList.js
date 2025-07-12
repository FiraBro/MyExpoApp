import { View, StyleSheet, Text } from "react-native";
import React from "react";
import AppImageInput from "./AppImageInput";

export default function AppImageList({
  imageUris = [],
  onAddImage,
  onRemoveImage,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        {imageUris.map((uri) => (
          <AppImageInput
            imageUri={uri}
            key={uri}
            onChangeImage={() => onRemoveImage(uri)}
          />
        ))}
      </View>
      <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  image: {
    flexDirection: "row",
    gap: 10,
  },
});

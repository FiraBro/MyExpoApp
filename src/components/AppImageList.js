import { View, StyleSheet, Text, ScrollView } from "react-native";
import React, { useRef } from "react";
import AppImageInput from "./AppImageInput";

export default function AppImageList({
  imageUris = [],
  onAddImage,
  onRemoveImage,
}) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() =>
          scrollView.current.scrollToEnd({ animated: true })
        }
      >
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
      </ScrollView>
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

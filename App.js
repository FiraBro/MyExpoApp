import { StyleSheet } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import AppImageInput from "./src/components/AppImageInput";
import Screen from "./src/components/Screen";
import AppImageList from "./src/components/AppImageList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAddImage = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemoveImage = (uriToRemove) => {
    setImageUris(imageUris.filter((uri) => uri !== uriToRemove));
  };

  return (
    <Screen style={styles.screen}>
      {/* <AppImageInput imageUri={null} onChangeImage={handleAddImage} /> */}
      <AppImageList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

import React, { useEffect, useState } from "react";
import { View, Text, Alert, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Screen from "./src/components/Screen";
import AppButton from "./src/components/AppButton";

export default function App() {
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Required", "Camera access is needed.");
      }
    })();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      const imageUri = result.uri;
      setImageUrl(imageUri);
    } catch (error) {
      console.log("some thing went wrong", error);
    }
  };

  return (
    <Screen>
      <AppButton title="Select" onPress={selectImage} />
      <Image
        source={{ uri: imageUrl }}
        style={{ flex: 1, width: 200, height: 200 }}
      />
    </Screen>
  );
}

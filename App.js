import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import AppImageInput from "./src/components/AppImageInput";
import Screen from "./src/components/Screen";
import AppButton from "./src/components/AppButton";
export default function App() {
  const [imageUri, setImageUri] = useState(null);

  const select = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.assets[0].uri);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen style={styles.screen}>
      <AppButton title="select" onPress={select} />
      <AppImageInput imageUri={imageUri} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

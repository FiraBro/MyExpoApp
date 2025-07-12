import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";

export default function AppImageInput({ imageUri, onChangeImage }) {
  const handlePress = async () => {
    if (!imageUri) select();
    else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };

  const select = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      onChangeImage(result.assets[0].uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={35}
            style={{ color: colors.medium }}
          />
        )}
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 200, height: 200, marginTop: 10 }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
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
});

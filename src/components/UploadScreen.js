import { Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTexts from "./AppTexts";

export default function UploadScreen({ progress, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.screen}>
        <AppTexts>{progress * 100}%</AppTexts>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

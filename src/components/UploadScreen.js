import { Modal, StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import React from "react";
import AppTexts from "./AppTexts";
import colors from "../config/colors";

export default function UploadScreen({ progress, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.screen}>
        <Progress.Bar color={colors.primaryColor} progress={progress} />
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

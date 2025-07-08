import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTexts from "./AppTexts";

export default function ErrorMessage({ error }) {
  if (!error) return null;
  return <AppTexts style={styles.error}>{error}</AppTexts>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

import { Text, Platform, StyleSheet } from "react-native";
import React from "react";

export default function AppTexts({ children, style, ...otherProp }) {
  return (
    <Text style={[styles.text, style]} {...otherProp}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "black", // Ensure visibility
    fontFamily: Platform.OS === "android" ? "Roboto" : "System", // Fallback for iOS
  },
});

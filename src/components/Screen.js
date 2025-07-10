import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import constants from "expo-constants";
export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.flex, style]}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});

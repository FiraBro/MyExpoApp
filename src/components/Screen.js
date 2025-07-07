import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import constants from "expo-constants";
export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[style.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  screen: {
    paddingTop: constants.statusBarHeight,
  },
});

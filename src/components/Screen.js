import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import constants from "expo-constants";
export default function Screen({ children }) {
  return <SafeAreaView style={style.screen}>{children}</SafeAreaView>;
}
const style = StyleSheet.create({
  screen: {
    paddingTop: constants.statusBarHeight,
  },
});

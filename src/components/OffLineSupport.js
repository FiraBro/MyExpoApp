import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import colors from "../config/colors";
import Constants from "expo-constants";
export default function OffLineSupport() {
  const netinfo = useNetInfo();

  if (netinfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You are offline</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: Constants.statusBarHeight,
    zIndex: 1,
    backgroundColor: colors.primaryColor,
    height: 50,
    width: "100%",
    justifyContent: "center", // move here
    alignItems: "center", // move here
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
});

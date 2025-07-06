import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import colors from "../config/colors";

export default function ListItemSeperator() {
  return <View style={style.seperator}></View>;
}

const style = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

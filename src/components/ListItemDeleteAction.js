import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";

export default function ListItemDeleteAction() {
  return (
    <View style={styles.deleteAction}>
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  deleteAction: {
    width: 70,
    backgroundColor: colors.danger,
    justifyContent: "center",
  },
});

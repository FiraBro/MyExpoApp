import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import defaultStyle from "../config/style";
export default function AppInputText({ icon, width = "100%", ...otherProp }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={30}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyle.text} {...otherProp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
});

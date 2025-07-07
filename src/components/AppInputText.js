import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";

export default function AppInputText({ icon, ...otherProp }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={35}
          color={colors.medium}
          style={styles.icon}
        />
      )}{" "}
      <TextInput style={styles.inputText} {...otherProp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignConten: "center",
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginLeft: 10,
  },
  inputText: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

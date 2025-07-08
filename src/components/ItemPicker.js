import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
export default function ItemPicker({ label, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={styles.item}>{label}</Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
  },
});
